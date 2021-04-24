import React from 'react';
import styled from '@emotion/styled';

import ActiveLink from 'components/ActiveLink/index';

const StyledNavbar = styled('nav')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: 20,
  border: 0,
  outline: 0,
  cursor: 'pointer',
  borderRadius: 5,
  textDecoration: 'none',
  a: {
    textDecoration: 'none',
    color: theme.colors.white,
    padding: 10,
    border: '1px solid transparent',
    borderRadius: theme.radii[2],
    '&.is-active': {
      borderColor: theme.colors.muted,
    },
    '&:hover': {
      borderColor: 'currentColor',
    },
    '& + a': {
      marginLeft: 10,
    },
  },
}));

const Navbar = () => {
  return (
    <StyledNavbar role='navigation' aria-label='main navigation'>
      <ActiveLink activeClassName='is-active' href='/'>
        <a>Categories</a>
      </ActiveLink>

      <ActiveLink activeClassName='is-active' href='/about'>
        <a className='navbar-item'>About</a>
      </ActiveLink>

      <ActiveLink activeClassName='is-active' href='/contribution'>
        <a className='navbar-item'>Contribution</a>
      </ActiveLink>
    </StyledNavbar>
  );
};

export default Navbar;
