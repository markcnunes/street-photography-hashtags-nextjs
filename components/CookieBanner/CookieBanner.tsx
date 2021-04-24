import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import initializeCookies, { cookieConsent } from 'utils/cookies';

const StyledCookieBanner = styled.div(({ theme }) => ({
  '.cookie': {
    position: 'fixed',
    zIndex: 100,
    left: '0',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colors.white,
    color: theme.colors.black,
    padding: '1.2rem 1.6rem',
    fontSize: theme.fontSizes[1],
  },

  '.cookie__message': {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 1.6rem 0',
    a: {
      color: theme.colors.black,
    },
  },

  button: {
    isplay: 'inline-flex',
    alignItems: 'center',
    padding: `8px 16px`,
    borderRadius: theme.radii[2],
    border: 0,
    outline: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.3s ease',

    '&#rcc-decline-button': {
      color: theme.colors.black,
      background: theme.colors.white,
      border: '1px solid ' + theme.colors.black,
      marginRight: '1.6rem',
    },

    '&#rcc-confirm-button': {
      color: theme.colors.white,
      background: theme.colors.primary,
      marginRight: '1.6rem',
    },
  },

  '@media (min-width: 30rem)': {
    '.cookie__message': {
      width: 'auto',
      flex: '1 0 0',
      textAlign: 'left',
      margin: '0 1.6rem 0 0',
    },
  },
  '@media (min-width: 50rem)': {
    '.cookie': {
      top: 'inherit',
      bottom: '0 !important',
    },
  },
  '@media (min-width: 70rem)': {
    '.cookie__message': {
      textAlign: 'center',
      flex: 'inherit',
    },
  },
}));

const CookieBanner = () => {
  return (
    <StyledCookieBanner>
      <CookieConsent
        buttonText='Ok'
        expires={150}
        onAccept={() => {
          initializeCookies();
        }}
        enableDeclineButton
        /*
      onDecline={() => {
        alert('nay!');
      }}
      debug={true}
      */
        cookieName={cookieConsent}
        cookieValue={'true'}
        disableStyles={true}
        containerClasses='cookie'
        contentClasses='cookie__message'
      >
        This website uses cookies to analyze web traffic. To find out more, read
        our <Link href={`/privacy`}>privacy</Link> and{' '}
        <Link href={`/terms`}>terms of use</Link>.
      </CookieConsent>
    </StyledCookieBanner>
  );
};

export default CookieBanner;
