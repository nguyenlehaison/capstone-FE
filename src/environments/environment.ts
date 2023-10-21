export const environment = {
  production: false,
  apiServerUrl: 'https://capstone-be-8yhm.onrender.com', // the running FLASK api server url
  auth0: {
    url: 'dev-6gmv1a0co3vnyslf.us', // the auth0 domain prefix
    audience: 'coffee_shop_api', // the audience set for the auth0 app
    clientId: 'ktD8dtSHt5Rxniqp4WFegv99iHmTdF6L', // the client id generated for the auth0 app
    callbackURL: 'https://capstone-fe-zs7x.onrender.com', // the base url of the running ionic application. 
  }
};
