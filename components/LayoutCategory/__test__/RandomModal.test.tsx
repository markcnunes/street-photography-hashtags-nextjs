import React from 'react';
import { render, screen } from 'test/setupTests';
import RandomModal from '../RandomModal';
import mockData from '../__mock__/mockData';

const { keywords } = mockData;
const mockHandleModal = jest.fn();

void describe('<RandomModal />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(
      <RandomModal
        keywords={keywords}
        showModal
        handleModal={mockHandleModal}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders keywords', () => {
    render(
      <RandomModal
        keywords={keywords}
        showModal
        handleModal={mockHandleModal}
      />,
    );
    expect(screen.getAllByTitle(/on Instagram/i)).toHaveLength(30);
  });
});
