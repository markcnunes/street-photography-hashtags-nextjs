import React from 'react';

import { render } from 'test/setupTests';

import CookieBanner from '../CookieBanner';

describe('<CookieBanner />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CookieBanner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
