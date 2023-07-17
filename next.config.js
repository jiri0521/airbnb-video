/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    name: "zaitaku video",
    shortName:"zaitaku",
    register: true,
    dest: 'public',
    skipWating: true,
    scope: '/',
    sw: 'service-worker.js',
  },
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
