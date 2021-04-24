import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import LayoutDefault from 'components/LayoutDefault';

const StyledContent = styled.div(({ theme }) => ({
  color: theme.colors.white,
  textAlign: 'center',
  a: {
    color: theme.colors.white,
    textDecoration: 'underline',
  },
  img: {
    marginTop: 25,
    marginBottom: 25,
    maxWidth: 300,
    borderRadius: 10,
  },
}));

export default function Custom404() {
  return (
    <LayoutDefault title='Whoops!'>
      <StyledContent>
        <img
          src='https://media1.tenor.com/images/635b444fc50817834006ea00d90653b0/tenor.gif?itemid=15276381'
          alt='there is no place like home'
        />
        <p>Sorry, something went wrong.</p>
        <p>Not to worry. You can head over to the homepage.</p>
        <p>
          <Link href='/'>
            <a className='button button--primary'>
              Take me back to the homepage
            </a>
          </Link>
        </p>
      </StyledContent>
    </LayoutDefault>
  );
}
