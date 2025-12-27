/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

// Read redirects from redirects.json
const redirectsPath = path.join(__dirname, 'redirects.json');
let redirects = [];

if (fs.existsSync(redirectsPath)) {
  try {
    const redirectsData = fs.readFileSync(redirectsPath, 'utf8');
    redirects = JSON.parse(redirectsData);
  } catch (error) {
    console.error('Error reading redirects.json:', error);
  }
}

// Convert redirects.json format to Next.js redirects format
const nextRedirects = redirects.map(redirect => ({
  source: redirect.source,
  destination: redirect.destination,
  permanent: redirect.permanent !== false, // Default to true (301) if not specified
}));

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return nextRedirects;
  },
};

module.exports = nextConfig;

