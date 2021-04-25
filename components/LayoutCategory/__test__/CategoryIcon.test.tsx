import React from 'react';
import { render, screen } from 'test/setupTests';
import CategoryIcon from '../CategoryIcon';
import mockData from '../__mock__/mockData';

const { icon } = mockData;

describe('<CategoryIcon />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<CategoryIcon variant={icon} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(<CategoryIcon variant={icon} />);
    expect(screen.getByTestId(icon)).toBeInTheDocument();
  });
});
