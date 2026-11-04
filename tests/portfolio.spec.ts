import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const widths = [320,375,430,768,1024,1280,1440];
for (const width of widths) {
  test(`responsive layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/about/', '/projects/', '/projects/context-invariant/', '/writing/building-retrieval-systems-that-know-their-limits/']) {
      await page.goto(path);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  });
}

test('filters, theme persistence, mobile menu, and keyboard access', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/projects/');
  await expect(page.locator('.project-entry:visible')).toHaveCount(10);
  const filter = page.getByRole('button', { name: 'Systems & Backend', exact: true });
  await filter.focus(); await page.keyboard.press('Enter');
  await expect(page.locator('.project-entry:visible')).toHaveCount(2);
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await expect(page.locator('.project-entry:visible')).toHaveCount(10);
  await expect(page.locator('html')).not.toHaveClass('dark');
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await page.reload(); await expect(page.locator('html')).toHaveClass('dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeHidden();
  expect(errors).toEqual([]);
});

test('content and accessibility on the principal routes', async ({ page }) => {
  for (const path of ['/', '/about/', '/projects/', '/writing/', '/projects/context-invariant/', '/projects/park-plus/', '/writing/building-retrieval-systems-that-know-their-limits/']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  }
  await page.goto('/');
  await expect(page.locator('.experience-row')).toHaveCount(6);
  await expect(page.locator('.project-row')).toHaveCount(5);
  await expect(page.locator('a[href="/resume.pdf"]')).toHaveCount(0);
});

test('progressive rendering, reduced motion, and visual artifacts', async ({ browser, page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.goto('/'); await page.screenshot({ path: '.qa/home-desktop.png', fullPage: true });
  await page.goto('/projects/'); await page.screenshot({ path: '.qa/projects-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/'); await page.screenshot({ path: '.qa/home-mobile.png', fullPage: true });
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage(); await staticPage.goto('http://127.0.0.1:4321/projects/');
  await expect(staticPage.locator('.project-entry')).toHaveCount(10);
  await expect(staticPage.locator('.filters')).toBeHidden();
  await context.close();
});

test('dark and mobile accessibility, nested refresh, and 404', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/about/');
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  for (const path of ['/about/', '/projects/', '/projects/context-invariant/']) {
    await page.goto(path);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
  }
  await page.reload();
  await expect(page.getByRole('heading', { name: 'ContextInvariant', exact: true, level: 1 })).toBeVisible();
  const response = await page.goto('/this-page-does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found.' })).toBeVisible();
});
