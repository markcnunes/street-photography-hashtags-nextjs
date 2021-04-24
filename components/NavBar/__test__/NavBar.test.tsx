import React from 'react';
import MockNextRouter from 'utils/MockNextRouter';
import { render } from 'utils/test-utils';
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
