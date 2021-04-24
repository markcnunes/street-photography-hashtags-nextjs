import React from 'react';
import { css, Global } from '@emotion/react';
import theme from './theme';
import { normalize } from 'polished';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Work+Sans:wght@600&display=swap');
        ${normalize()},
        *,
          *::before,
          *::after {
          box-sizing: inherit;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          width: 100%;
          font-family: ${theme.fonts.body};
          font-weight: ${theme.fontWheights.body[1]};
          box-sizing: border-box;
        }
        #__next {
          display: flex;
          flex-wrap: wrap;
          background: ${theme.colors.gradient};
          min-height: 100vh;
        }
        a {
          cursor: pointer;
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: ${theme.fonts.heading};
          font-weight: ${theme.fontWheights.heading[1]};
          letter-spacing: 1px;
        }
        .ReactModalPortal {
          position: relative;
          z-index: 9999;
        }

        .ReactModal__Body--open {
          overflow: hidden;
          .Toastify__toast-container {
            z-index: 10000;
          }
        }

        .ReactModal__Overlay {
          display: flex;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85) !important;
          align-items: center;
          justify-content: center;
        }
      `}
    />
  );
}

export default GlobalStyles;
