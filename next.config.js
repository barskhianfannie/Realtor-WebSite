/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async headers(){
    return [
      {
        source:'/:path*',
        headers:[
          {
            key:'X-System',
            value:'YD-Realtor-LA'
          },
          {
            key:'X-System-Key',
            value:'c78812d6e43e25689c3718bfb1066af7'
          },
          {
            key:'YD-Realtor-LA',
            value:'c78812d6e43e25689c3718bfb1066af7'
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
