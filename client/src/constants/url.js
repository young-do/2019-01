const URL = {
  LOCAL_GITHUB_OAUTH: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_LOCAL_CLIENT_ID}`,
  LOCAL_API_SERVER: 'http://localhost:3000',
  PRODUCTION_GITHUB_OAUTH: `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_PRODUCTION_CLIENT_ID}`,
  ADMIN_BACKGROUND: 'https://kr.object.ncloudstorage.com/connect-2019-01/image/boolean_avengers_logo2.png',
};

export default URL;