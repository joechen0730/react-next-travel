import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
  images: {
    domains: ['www.travel.taipei'],
    remotePatterns: [new URL('https://www.travel.taipei/image/**')]
  }
}

export default nextConfig