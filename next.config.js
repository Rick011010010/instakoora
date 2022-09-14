 {import('next').NextConfig} 
module.exports = {
  reactStrictMode: true,
  image:{
    domains:["/BG TELE.png"]
  },
  image2:{
    domains:["/app BG"]
    
  },
  image3:{
    domains:["/LOGO INSTA KOORA.png"]
    
  }

  

 
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
