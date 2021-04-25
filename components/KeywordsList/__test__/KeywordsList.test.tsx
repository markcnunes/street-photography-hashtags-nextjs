import React from 'react';
import { render, screen } from 'test/setupTests';
import KeywordsList from '../KeywordsList';
import keywords from '../__mock__/mockData';

describe('<KeywordsList />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<KeywordsList keywords={keywords} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders items', () => {
    render(<KeywordsList keywords={keywords} />);
    expect(screen.getAllByTitle(/on Instagram/i)).toHaveLength(30);
  });
  it('renders counter', () => {
    render(<KeywordsList keywords={keywords} counter />);
    expect(screen.getByText('30')).toBeInTheDocument();
  });
  it('renders copy to clipboard button', () => {
    render(<KeywordsList keywords={keywords} copy />);
    expect(screen.getByTitle('Copy all to clipboard')).toBeInTheDocument();
  });
});
