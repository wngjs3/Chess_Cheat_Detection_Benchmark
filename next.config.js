/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages를 위한 base path 설정 (저장소 이름으로 변경하세요)
  basePath: '/Chess_Cheat_Detection_Benchmark',
  assetPrefix: '/Chess_Cheat_Detection_Benchmark',
}

module.exports = nextConfig 