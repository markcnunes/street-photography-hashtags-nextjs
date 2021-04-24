import styled from '@emotion/styled';
import Button from 'components/Button';
import React from 'react';
import { FiClipboard } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Category } from 'pages/api/types';

interface KeywordsListProps extends Pick<Category, 'keywords'> {
  /**
   * If `true`, it will display the icon to copy the items.
   */
  copy?: boolean;
  /**
   * If `true`, it will display the length of items.
   */
  counter?: boolean;
  /**
   * Allows more props. corresponds to ...other
   */
  [propName: string]: any;
}

const KeywordsList = ({
  keywords,
  copy = true,
  counter = true,
  ...other
}: KeywordsListProps) => {
  const keywordsList = keywords.map((item) => (
    <a
      href={`https://www.instagram.com/explore/tags/${item.split('#')[1]}/`}
      title={`View ${item.split('#')[1]} on Instagram`}
      target='_blank'
      rel='noopener noreferrer'
      key={item}
    >
      {item}
    </a>
  ));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(keywords.join(' '));
    toast('✔️ Copied to Clipboard', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <StyledKeywordsList {...other}>
      <StyledItems>{keywordsList}</StyledItems>
      {(counter || copy) && (
        <StyledSidebar>
          {counter && <StyledCounter>{keywords.length}</StyledCounter>}
          {copy && (
            <StyledCopy
              color='black'
              variant='outlined'
              icon='only'
              title='Copy all to clipboard'
              onClick={copyToClipboard}
            >
              <FiClipboard />
            </StyledCopy>
          )}
        </StyledSidebar>
      )}
    </StyledKeywordsList>
  );
};

export default KeywordsList;

const StyledKeywordsList = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  background: theme.colors.white,
  borderRadius: 5,
  width: '100%',
  padding: 20,
  '@media (min-width: 1024px)': {
    padding: '40px 30px',
  },
}));

const StyledItems = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  paddingRight: 30,
  minHeight: 70,

  a: {
    color: theme.colors.black,
    padding: 5,
    textDecoration: 'none',
    borderRadius: 5,
    border: `1px solid transparent`,
    '&:hover': {
      borderColor: theme.colors.muted,
    },
  },
  '&:hover': {
    a: {
      color: theme.colors.muted,

      '&:hover': {
        color: theme.colors.black,
      },
    },
  },

  '@media (max-width: 420px)': {
    fontSize: 12,
  },
}));

const StyledSidebar = styled('div')({
  position: 'absolute',
  top: 20,
  right: 20,
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 1024px)': {
    top: 40,
  },
});

const StyledCounter = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 28,
  width: 28,
  fontSize: 10,
  color: theme.colors.black,
  border: `1px solid ${theme.colors.black}`,
  borderRadius: 5,
  opacity: 0.5,
  marginBottom: 10,
}));

const StyledCopy = styled(Button)({
  padding: '5px',
});
