import styled from '@emotion/styled';
import { darken, rgba } from 'polished';
import Link from 'next/link';
import CategoryIcon from 'components/LayoutCategory/CategoryIcon';
import { CategoryIcon as CategoryIconType } from 'pages/api/types';

interface LinkCTAProps {
  /**
   * Takes one of icons from 'TCategoryIcon' corresponds to Icons variations
   */
  icon?: CategoryIconType;
  /**
   * Takes string. corresponds to title and page path
   */
  category: string;
  /**
   * Allows more props. corresponds to ...other
   */
  [propName: string]: any;
}

const LinkCTA = ({ icon, category, ...other }: LinkCTAProps) => {
  return (
    <Link href={`/${category}`}>
      <StyledLinkCTA {...other} title={`View ${category}`}>
        {icon && <CategoryIcon variant={icon} />}
        <h3>{category}</h3>
        <span className='background' />
      </StyledLinkCTA>
    </Link>
  );
};

export default LinkCTA;

const StyledLinkCTA = styled.a((props) => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  flex: '1 0 0',
  padding: 30,
  margin: 10,
  minWidth: 150,
  textDecoration: 'none',
  outline: 0,
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius: 5,
  color: props.theme.colors.white,
  background: `linear-gradient(10deg, ${rgba(
    props.theme.colors.white,
    0.1,
  )} 0%, ${rgba(darken(0.1, props.theme.colors.white), 0)} 100%)`,
  backdropFilter: 'blur(5px)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  border: '1px solid transparent',
  borderColor: rgba(props.theme.colors.white, 0.1),

  h3: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    textTransform: 'capitalize',
  },
  svg: {
    position: 'relative',
    zIndex: 1,
    height: 50,
    width: 50,
  },
  '.background': {
    content: 'normal',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, ${rgba(
      props.theme.colors.primary,
      0.3,
    )} 0%, ${rgba(darken(0.5, props.theme.colors.primary), 0.2)} 100%)`,
    opacity: 0,
    transform: 'scale(4) rotate(-180deg)',
    transition: 'all .5s ease',
  },
  '&:hover': {
    color: props.theme.colors.white,
    '.background': {
      opacity: 1,
      transform: 'scale(1) rotate(0)',
    },
  },
  '@media (min-width: 780px)': {
    flex: 0,
    minWidth: 200,
    height: 200,
  },
}));
