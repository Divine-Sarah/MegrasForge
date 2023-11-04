/** @type {import('next').NextConfig} */
const nextConfig = {
     env: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  },
}


module.exports = nextConfig
