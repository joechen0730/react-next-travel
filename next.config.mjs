import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
  images: {
    unoptimized:true,
    domains: ['www.travel.taipei'],
    remotePatterns: [new URL('https://www.travel.taipei/image/**')]
  },
  basePath: '/react-next-travel',
  assetPrefix: '/react-next-travel/',
}

export default nextConfig