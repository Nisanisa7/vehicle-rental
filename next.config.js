module.exports = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    images: {
    //   domains: [process.env.NEXT_PUBLIC_WEB_URL, process.env.NEXT_PUBLIC_BASE_URL],
    },
    async rewrites() {
      return [
        {
          source: '/login',
          destination: '/auth_user/',
        },
        // {
        //   source: '/register',
        //   destination: '/auth/register',
        // },
        // {
        //   source: '/forgot-password',
        //   destination: '/auth/forgot-password',
        // },
        // {
        //   source: '/reset-password/:token',
        //   destination: '/auth/reset-password/:token',
        // },
      ];
    },
  };
  