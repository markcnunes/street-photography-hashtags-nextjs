import styled from '@emotion/styled';
import { rgba } from 'polished';
import ShareButtons from './ShareButtons';

const StyledShare = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
  width: 'calc(100% - 80px)',
  maxWidth: 1200,
  margin: '0 auto',
  padding: 10,
  color: props.theme.colors.white,
  border: '1px solid transparent',
  borderColor: rgba(props.theme.colors.white, 0.1),
  borderRadius: 10,
  '.share-buttons': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '.share-buttons__item': {
    svg: {
      borderRadius: '50%',
      '&:hover': {
        background: props.theme.colors.primary,
      },
    },
  },
  '.share-buttons__clipboard': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: 36,
    width: 36,
    padding: 0,
    '&:hover': {
      color: props.theme.colors.white,
      background: props.theme.colors.primary,
    },
  },
  '@media (min-width: 780px)': {
    width: 'auto',
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    borderRadius: '10px 0 0 10px',
    h4: {
      display: 'none',
    },
    '.share-buttons': {
      flexDirection: 'column',
      'button + button': {
        marginTop: 10,
      },
    },
  },
  '@media (min-width: 1280px)': {
    right: 20,
    borderRadius: 10,
  },
}));

const Share: React.FC = () => {
  return (
    <StyledShare>
      <h4>Share this page</h4>
      <ShareButtons />
    </StyledShare>
  );
};

export default Share;
