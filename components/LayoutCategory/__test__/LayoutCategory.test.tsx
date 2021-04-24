import React from 'react';
import { render, screen } from 'utils/test-utils';
import LayoutCategory from '../LayoutCategory';
import mockData, { mockDataWichSubcategories } from '../__mock__/mockData';

const { category, icon, keywords, subcategories } = mockData;

describe('<LayoutCategory />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <LayoutCategory
        category={category}
        icon={icon}
        keywords={keywords}
        subcategories={subcategories}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(
      <LayoutCategory
        category={category}
        icon={icon}
        keywords={keywords}
        subcategories={subcategories}
      />,
    );
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByTestId(icon)).toBeInTheDocument();
    expect(screen.getAllByTitle(/on Instagram/i)).toHaveLength(30);
  });
  it('show filter for category All', () => {
    const categoryAll = 'all';
    render(
      <LayoutCategory
        category={mockDataWichSubcategories.category}
        icon={mockDataWichSubcategories.icon}
        keywords={mockDataWichSubcategories.keywords}
        subcategories={mockDataWichSubcategories.subcategories}
      />,
    );
    expect(screen.getByText(/filter/i)).toBeInTheDocument();
  });
});
