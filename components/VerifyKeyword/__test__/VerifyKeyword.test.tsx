import React from 'react';
import { render, screen } from 'test/setupTests';
import userEvent from '@testing-library/user-event';
import VerifyKeyword from '../VerifyKeyword';
import mockData from '../__mock__/mockData';

const { keywords } = mockData;

describe('<VerifyKeyword />', () => {
  it('matchs snapshot', () => {
    const { asFragment } = render(<VerifyKeyword keywords={keywords} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('display new keyword', () => {
    render(<VerifyKeyword keywords={keywords} />);
    const input = screen.getByPlaceholderText(
      /Type a keyword. Use space for multiple keywords/i,
    );

    // add some keyword
    userEvent.type(input, '#newKeyword');
    expect(input).toHaveValue('#newKeyword');

    // click to open modal
    userEvent.click(screen.getByText('Verify keyword'));

    expect(screen.getByText(/New Keyword/i)).toBeInTheDocument();
    expect(screen.getByText('#newKeyword')).toBeInTheDocument();
  });
  it('displays if keyword exist', () => {
    render(<VerifyKeyword keywords={keywords} />);
    const input = screen.getByPlaceholderText(
      /Type a keyword. Use space for multiple keywords/i,
    );

    // add some keyword
    userEvent.type(input, '#test1');
    expect(input).toHaveValue('#test1');

    // click to open modal
    userEvent.click(screen.getByText('Verify keyword'));

    expect(screen.getByText(/This keyword already exist/i)).toBeInTheDocument();
    expect(screen.getByText('#test1')).toBeInTheDocument();
  });
  describe('Check rules', () => {
    it(`only accepts keywords starting with #`, () => {
      render(<VerifyKeyword keywords={keywords} />);
      const input = screen.getByPlaceholderText(
        /Type a keyword. Use space for multiple keywords/i,
      );

      // add some keyword
      userEvent.type(input, '@wrog');
      expect(input).toHaveValue('@wrog');

      // click to open modal
      userEvent.click(screen.getByText('Verify keyword'));

      expect(
        screen.getByText(/Keywords must start with #/i),
      ).toBeInTheDocument();
    });
    it(`renders keywords with _`, () => {
      render(<VerifyKeyword keywords={keywords} />);
      const input = screen.getByPlaceholderText(
        /Type a keyword. Use space for multiple keywords/i,
      );

      // add some keyword
      userEvent.type(input, '#some_keyword');
      expect(input).toHaveValue('#some_keyword');

      // click to open modal
      userEvent.click(screen.getByText('Verify keyword'));

      expect(screen.getByText(/New Keyword/i)).toBeInTheDocument();
      expect(screen.getByText('#some_keyword')).toBeInTheDocument();
    });
    it(`doesn't accept special character`, () => {
      render(<VerifyKeyword keywords={keywords} />);
      const input = screen.getByPlaceholderText(
        /Type a keyword. Use space for multiple keywords/i,
      );

      // add some keyword
      userEvent.type(input, '#notAllows@');
      expect(input).toHaveValue('#notAllows@');

      // click to open modal
      userEvent.click(screen.getByText('Verify keyword'));

      expect(
        screen.getByText(
          /Keywords can only start with # and be followoed by letters or _/i,
        ),
      ).toBeInTheDocument();
    });
  });
});
