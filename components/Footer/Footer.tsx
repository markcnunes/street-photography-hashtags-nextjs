import styled from '@emotion/styled';
import Link from 'next/link';

const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: 20,
  fontSize: theme.fontSizes[1],
  color: theme.colors.white,
  '@media (min-width: 780px)': {
    flexDirection: 'row',
  },
}));

const StyledAuthor = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20,
  a: {
    color: theme.colors.white,
    marginLeft: 5,
    '&:hover': {
      color: theme.colors.white,
    },
  },
  '@media (min-width: 780px)': {
    marginBottom: 0,
  },
}));

const StyledLinks = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 0 0',
  marginBottom: 20,
  a: {
    color: theme.colors.white,
    margin: '0 10px',
  },
  '@media (min-width: 780px)': {
    marginBottom: 0,
  },
}));

const StyleCta = styled.a(({ theme }) => ({
  fontSize: theme.fontSizes[1],
  color: 'currentColor',
  border: '1px solid currentColor',
  padding: '8px 16px',
  borderRadius: 5,
  textDecoration: 'none',
}));

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledAuthor>
        Created by
        <a
          href='https://www.instagram.com/markcnunes/'
          title="Mark's website"
          target='_blank'
          rel='noopener noreferrer'
        >
          Mark Claus Nunes
        </a>
      </StyledAuthor>
      <StyledLinks>
        <Link href={`/privacy`}>Privacy</Link>
        <Link href={`/terms`}>Terms of use</Link>
      </StyledLinks>
      <Link href='/contribution'>
        <StyleCta>Contributions are welcomed!</StyleCta>
      </Link>
    </StyledFooter>
  );
};

export default Footer;
