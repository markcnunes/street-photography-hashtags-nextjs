import React from 'react';
import MockNextRouter from 'utils/MockNextRouter';
import { render } from 'utils/test-utils';

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
