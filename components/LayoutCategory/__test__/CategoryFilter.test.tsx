import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from 'utils/test-utils';
import CategoryFilter from '../CategoryFilter';

const mockOptions = ['first', 'second', 'third'];

const mockFilterKeywords = jest.fn();

describe('<CategoryFilter />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <CategoryFilter
        options={mockOptions}
        filterKeywords={mockFilterKeywords}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders whiout props', () => {
    const { asFragment } = render(
      <CategoryFilter options={[]} filterKeywords={mockFilterKeywords} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(
      <CategoryFilter
        options={mockOptions}
        filterKeywords={mockFilterKeywords}
      />,
    );
    expect(screen.getByText(mockOptions[0])).toBeInTheDocument();
  });
  it('hide and show category', () => {
    const { container } = render(
      <CategoryFilter
        options={mockOptions}
        filterKeywords={mockFilterKeywords}
      />,
    );
    const input = screen.getByText(mockOptions[0]);
    const active = container.getElementsByClassName('active');

    // hide category
    userEvent.click(input);

    expect(active.length).toBe(1);
    expect(input).toHaveStyle({
      opacity: 0.4,
    });

    // show category
    userEvent.click(active[0]);
    expect(active.length).toBe(1); // stills 1 because show or hide all buttons inherit it
    expect(input).not.toHaveStyle({
      opacity: 0.4,
    });
  });
});
