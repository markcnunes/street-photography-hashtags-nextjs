import React from 'react';
import { render } from 'test/setupTests';
import LayoutDefault from '../LayoutDefault';

describe('<LayoutDefault />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<LayoutDefault />);
    expect(asFragment()).toMatchSnapshot();
  });
});
