import styled from '@emotion/styled';
import Link from 'next/link';
import Navbar from 'components/NavBar';
import Button from 'components/Button';

const StyledHeader = styled('header')((props) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
  padding: 20,
  color: props.theme.colors.white,
  '.logo': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    img: {
      width: 100,
    },
  },
  '.github': {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  '@media (max-width: 400px)': {
    justifyContent: 'center',
  },
  '@media (max-width: 780px)': {
    nav: {
      order: 1,
      width: '100%',
      justifyContent: 'center',
    },
  },
}));

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <a className='logo' title='home'>
          <img src={'./logo-white.svg'} alt='Logo' />
        </a>
      </Link>

      <Navbar />
      <Button
        as='a'
        href='https://github.com/markcnunes/street-photography-hashtags'
        title='View project on GitHub'
        target='_blank'
        rel='noopener noreferrer'
        variant='outlined'
        size='small'
        color='white'
      >
        <svg
          className='github'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          stroke='currentColor'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>{' '}
        </svg>
        GitHub
      </Button>
    </StyledHeader>
  );
};

export default Header;
