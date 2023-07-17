/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
    buildExcludes: [/middleware-manifest.json/],
    reactStrictMode: true
});

const nextConfig = {
    experimental:{
        appDir: true,
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
        ]
    }
}

module.exports = nextConfig
