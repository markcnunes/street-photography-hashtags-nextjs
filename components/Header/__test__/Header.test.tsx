import React from 'react';
import MockNextRouter from 'test/MockNextRouter';
import { render } from 'test/setupTests';

import Header from '../Header';

describe('<Header />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MockNextRouter>
        <Header />
      </MockNextRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
