import type { APIRoute } from 'astro';
import sharp from 'sharp';

// Rendered once at build time; no image service or runtime server is required.
export const GET: APIRoute = async () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f7f6f3"/>
    <text x="80" y="100" font-family="Arial,sans-serif" font-size="34" font-weight="bold" fill="#15161b">SC.</text>
    <path d="M80 150h1040M80 510h1040" stroke="#d7d5d0"/>
    <text x="80" y="300" font-family="Arial,sans-serif" font-size="72" font-weight="bold" letter-spacing="-3" fill="#15161b">Shubhank Chandak</text>
    <text x="80" y="362" font-family="Arial,sans-serif" font-size="30" fill="#5b5d66">Software Engineer</text>
    <text x="80" y="412" font-family="Arial,sans-serif" font-size="25" fill="#465e7d">Backend · Systems · AI</text>
    <text x="80" y="558" font-family="Arial,sans-serif" font-size="20" fill="#5b5d66">shubhankchandak.vercel.app</text>
  </svg>`;
  const data = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(data), { headers: { 'Content-Type': 'image/png' } });
};
