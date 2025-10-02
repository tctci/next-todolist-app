/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: false, // 开发时可暂时关闭严格模式
    eslint: {
      ignoreDuringBuilds: true, // 开发时先关闭ESLint检查
    },
    typescript: {
      ignoreBuildErrors: true, // 开发时先关闭TS类型检查
    }

};

module.exports = nextConfig;
