import React from 'react';
import MockNextRouter from 'test/MockNextRouter';
import { render, screen } from 'test/setupTests';
import LinkCTA from '../LinkCTA';
import mockData from '../__mock__/mockData';

const { category, icon } = mockData;

describe('<LinkCTA />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <MockNextRouter>
        <LinkCTA category={category} icon={icon} />
      </MockNextRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders props', () => {
    render(
      <MockNextRouter>
        <LinkCTA category={category} icon={icon} />
      </MockNextRouter>,
    );
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByTestId(icon)).toBeInTheDocument();
  });
});
