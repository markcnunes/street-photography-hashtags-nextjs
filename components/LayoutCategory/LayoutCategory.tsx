import styled from '@emotion/styled';
import { darken, rgba } from 'polished';
import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';
import RandomPicker from './RandomPicker';
import KeywordsList from 'components/KeywordsList/KeywordsList';
import CategoryFilter from './CategoryFilter';
import { Category } from 'pages/api/types';

type LayoutCategoryProps = Category;

const LayoutCategory = ({
  category,
  icon,
  keywords,
  subcategories,
}: LayoutCategoryProps) => {
  /**
   * Categories can hold subcategories.
   * keywordsData makes sure to get all keywords if there are subcategories.
   */
  const keywordsData = subcategories
    ? subcategories.map((category) => category.keywords).flat()
    : keywords;

  const [renderKeywords, setRenderKeywords] = useState<Category['keywords']>(
    keywordsData,
  );

  const filterKeywords = (listOfKeywords: string[]) => {
    const withoutHidenCategories = subcategories
      .filter(
        (category) =>
          !listOfKeywords.some((item) => item === category.category),
      )
      .map((category) => category.keywords)
      .flat();

    setRenderKeywords(withoutHidenCategories);
  };

  return (
    <StyledLayoutCategory>
      <StyledSubheader>
        <div className='wrapper'>
          <div className='title'>
            {icon && <CategoryIcon variant={icon} />}
            <h3>{category}</h3>
          </div>
        </div>
      </StyledSubheader>
      <main>
        <div>
          {subcategories && (
            <CategoryFilter
              options={subcategories.map((item) => item.category)}
              filterKeywords={filterKeywords}
            />
          )}

          <StyledKeywordsList keywords={renderKeywords} />
          <StyledToolbar>
            <RandomPicker keywords={renderKeywords} />
          </StyledToolbar>
        </div>
      </main>
    </StyledLayoutCategory>
  );
};

export default LayoutCategory;

const StyledLayoutCategory = styled('div')(({ theme }) => ({
  flex: '1 0 0',
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '90%',
    padding: 20,
    margin: '0 auto',

    '& > h4': {
      width: '100%',
      textAlign: 'center',
      color: theme.colors.white,
    },
    '& > div': {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  '@media (min-width: 780px)': {
    main: {
      '& > div': {
        flexDirection: 'row',
      },
    },
  },
  '@media (min-width: 1024px)': {
    main: {
      maxWidth: 1200,
    },
  },
}));

const StyledSubheader = styled.div(({ theme }) => ({
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
  a: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    textDecoration: 'none',
    div: {
      display: 'flex',
      flex: '1 0 0',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
  '@media (max-width: 780px)': {
    '.wrapper': {
      paddingLeft: 40,
      paddingRight: 40,
    },
    a: {
      left: 10,
      div: {
        fontSize: 0,
        padding: 10,
        span: {
          fontSize: theme.fontSizes[2],
          marginRight: 0,
        },
      },
    },
  },
  '@media (min-width: 1024px)': {
    maxWidth: 1200,
  },
}));

const StyledKeywordsList = styled(KeywordsList)({
  borderRadius: '0 0 5px 5px',

  flex: '1 0 0',
  order: 1,
  '@media (min-width: 780px)': {
    order: 0,
    borderRadius: '5px 0 0 5px ',
  },
});

const StyledToolbar = styled.div(({ theme }) => ({
  color: theme.colors.white,
  background: rgba(theme.colors.black, 0.5),
  borderRadius: '5px 5px 0 0',
  width: '100%',
  padding: 20,
  '& > * + *': {
    marginTop: 20,
    paddingTop: 20,
    borderTop: `1px solid ${theme.colors.muted}`,
  },

  '@media (min-width: 780px)': {
    borderRadius: '0 5px 5px 0',
    maxWidth: 280,
  },
  '@media (min-width: 1024px)': {
    padding: 40,
    maxWidth: 360,
  },
}));
