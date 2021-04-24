import React from 'react';
import { render } from 'utils/test-utils';
import LayoutDefault from '../LayoutDefault';

describe('<LayoutDefault />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<LayoutDefault />);
    expect(asFragment()).toMatchSnapshot();
  });
});
