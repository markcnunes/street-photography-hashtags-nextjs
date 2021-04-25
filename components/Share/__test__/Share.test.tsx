import React from 'react';
import { render } from 'test/setupTests';
import Share from '../Share';

describe('<Share />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<Share />);
    expect(asFragment()).toMatchSnapshot();
  });
});
