// import ReactGA from 'react-ga';

import GA4React from 'ga-4-react';

export const cookieConsent = 'sphCookieconsent';

/*
 * Check if cookie consentment is true before initializing and rendering it
 */
export const getCookie = (key: string): string | undefined => {
  var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
};

export const gaCode = 'G-W7QKGLQ9YV';
const initializeCookies = () => {
  if (!window.location.href.includes('localhost')) {
    const ga4react = new GA4React(gaCode);
    ga4react.initialize();
    // reload page to get the track running
    window.location.reload();
  }
};

export const renderCookies = (): any => {
  getCookie(cookieConsent) === 'true' && initializeCookies();
};

export default initializeCookies;
