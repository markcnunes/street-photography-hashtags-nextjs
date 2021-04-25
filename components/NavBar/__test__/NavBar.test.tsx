import React from 'react';
import MockNextRouter from 'test/MockNextRouter';
import { render } from 'test/setupTests';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <MockNextRouter>
        <NavBar />
      </MockNextRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
