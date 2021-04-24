import React from 'react';
import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import RandomPicker from '../RandomPicker';
import mockData from '../__mock__/mockData';

const { keywords } = mockData;

describe('<RandomPicker />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<RandomPicker keywords={keywords} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders title', () => {
    render(<RandomPicker keywords={keywords} />);

    const linkElement = screen.getByText(/Random selection of keywords/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('changes input limit', async () => {
    render(<RandomPicker keywords={keywords} />);

    const input = screen.getByLabelText(/Quantity/i);

    // change limit to 3
    userEvent.selectOptions(input, ['3']);
    expect(input).toHaveValue('3');
  });

  it('opens modal with 10 keywords', async () => {
    render(<RandomPicker keywords={keywords} />);

    const input = screen.getByLabelText(/Quantity/i);

    // change limit to 10
    userEvent.selectOptions(input, ['10']);
    expect(input).toHaveValue('10');

    // click to open modal
    userEvent.click(screen.getByText(`I'm Feeling Lucky`));

    // list has 10 items
    const listItems = await screen.findAllByTitle(/on Instagram/i);
    expect(listItems).toHaveLength(10);
  });
});
