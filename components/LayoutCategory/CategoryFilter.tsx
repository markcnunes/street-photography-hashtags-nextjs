import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

export interface CategoryFilterProps {
  /**
   * Option of keywords available to be filtered.
   */
  options: string[];
  /**
   * Action to filter keywords.
   */
  filterKeywords: (arg: string[]) => void;
}

const CategoryFilter = ({ options, filterKeywords }: CategoryFilterProps) => {
  const [hidenCategories, setHidenCategories] = useState<string[]>([]);

  // Show or hide some specific category
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    let updateHidenCategories;

    if (event.target.checked) {
      // add
      updateHidenCategories = [...hidenCategories, name];
    } else {
      // remove
      updateHidenCategories = hidenCategories.filter((item) => item !== name);
    }
    filterKeywords(updateHidenCategories);
    setHidenCategories(updateHidenCategories);
  };

  // Show or hide all keywords
  const handleInputChangeAll = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    let updateHidenCategories: string[];

    if (name === 'all') {
      updateHidenCategories = [];
    } else {
      // if name = none
      updateHidenCategories = options;
    }

    filterKeywords(updateHidenCategories);
    setHidenCategories(updateHidenCategories);
  };

  return (
    <StyledCategoryFilter>
      <h4>Filter:</h4>
      <label
        className={
          hidenCategories.length === options.length ? 'active' : undefined
        }
      >
        Show All
        <input
          name='all'
          type='checkbox'
          checked={hidenCategories.length === options.length}
          onChange={handleInputChangeAll}
        />
      </label>
      <label className={hidenCategories.length === 0 ? 'active' : undefined}>
        Hide All
        <input
          name='none'
          type='checkbox'
          checked={hidenCategories.length === 0}
          onChange={handleInputChangeAll}
        />
      </label>
      {options.map((item) => (
        <label
          key={item}
          className={
            hidenCategories.some((category) => category === item)
              ? 'active'
              : undefined
          }
        >
          {item}
          <input
            name={item}
            type='checkbox'
            checked={hidenCategories.some((category) => category === item)}
            onChange={handleInputChange}
          />
        </label>
      ))}
    </StyledCategoryFilter>
  );
};

export default CategoryFilter;

const StyledCategoryFilter = styled('form')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  padding: 10,
  fontSize: theme.fontSizes[1],
  color: theme.colors.white,
  border: `1px solid ${theme.colors.white}`,
  borderRadius: 5,
  marginBottom: 20,
  h4: {
    margin: 0,
    width: '100%',
    textAlign: 'center',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    lineHeight: 0,
    cursor: 'pointer',
    borderRadius: 3,
    margin: 5,
    textTransform: 'capitalize',
    '&.active': {
      opacity: 0.4,
    },
    '&:hover': {
      color: theme.colors.black,
      background: theme.colors.white,
    },
    input: {
      display: 'none',
    },
  },
  '@media (min-width: 780px)': {
    h4: {
      width: 'auto',
      lineHeight: 1,
      marginRight: 10,
    },
  },
}));
