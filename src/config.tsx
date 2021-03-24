const getEnvVar = (varName: string): string | undefined => {
  if (process.env[varName]) {
    return process.env[varName];
  }
  // Set in %PUBLIC_FOLDER%/dev.properties.
  // @ts-ignore
  return window[varName];
};

const config = {
  SENTRY_URL: getEnvVar('REACT_APP_SENTRY_URL'),
  GOOGLE_ANALYTICS_CODE: getEnvVar('REACT_APP_GOOGLE_ANALYTICS_CODE'),
  SAN_FRANCISCO_LAT: 37.7749,
  SAN_FRANCISCO_LONG: -122.4194,
  REACT_APP_GOOGLE_API_KEY: getEnvVar('REACT_APP_GOOGLE_KEY'),
  REACT_APP_BACKEND_ENDPOINT: getEnvVar('REACT_APP_BACKEND_ENDPOINT'),
  RESEND_TIMEOUT: 60,
  STRIPE_LINK: getEnvVar('REACT_APP_STRIPE_LINK'),
  organizerId: '5f0fe3c2bcd0516b86f39bd9',
  posAuthUsingRedirection: true,
  cookieDomain: '.sleek.fyi',
  posList: [
    {
      name: 'Square',
      img: '/img/manual/squareIcon.png',
      redirectUrl: getEnvVar('REACT_APP_SQUARE_AUTH_URL') || '',
      // If True then state is added in the redirect url but only saved in the cookie.
      appendStateInRedirectUrl: true,
    },
    {
      name: 'Clover',
      img: '/img/manual/cloverIcon.png',
      redirectUrl: getEnvVar('REACT_APP_CLOVER_AUTH_URL') || '',
    },
  ],
  REACT_APP_STRIPE_LOAD_KEY: getEnvVar('REACT_APP_STRIPE_LOAD_KEY'),
  STRIPE_CARD_OPTIONS: {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#000000',
        color: '#000000',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#d9dbdf',
        },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  },
};

export default config;
