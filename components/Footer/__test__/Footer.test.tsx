import React from 'react';
import { render } from 'test/setupTests';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
