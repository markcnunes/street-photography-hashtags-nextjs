import styled from '@emotion/styled';
import { darken, rgba } from 'polished';
import React from 'react';

interface ILayoutDefault {
  /**
   * Takes string
   */
  title?: string;
  /**
   * Content of component
   */
  children?: React.ReactNode;
  /**
   * Takes string
   */
  className?: string;
}

const StyledLayoutDefault = styled('div')(({ theme }) => ({
  flex: '1 0 0',
  color: theme.colors.white,
  a: {
    color: theme.colors.white,
  },
  p: {
    lineHeight: 1.5,
  },

  '.subheader': {
    display: 'flex',
    padding: 20,
    border: 0,
    outline: 0,
    width: '100%',
    maxWidth: '90%',
    margin: '0 auto',
    color: theme.colors.white,
    '.wrapper': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      padding: 20,
      background: `linear-gradient(10deg, ${rgba(
        theme.colors.white,
        0.1,
      )} 0%, ${rgba(darken(0.1, theme.colors.white), 0)} 100%)`,
      borderRadius: 5,
    },
    h3: {
      margin: '0 auto',
      textTransform: 'uppercase',
    },

    '.title': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      svg: {
        marginRight: 5,
      },
    },
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '90%',
    padding: 20,
    margin: '0 auto',

    '& > *': {
      width: '100%',
    },
  },
}));

const LayoutDefault: React.FC<ILayoutDefault> = ({ title, children }) => {
  return (
    <StyledLayoutDefault>
      <div className='subheader'>
        <div className='wrapper'>
          <h2 className='title'>{title}</h2>
        </div>
      </div>
      <main>{children}</main>
    </StyledLayoutDefault>
  );
};

export default LayoutDefault;
