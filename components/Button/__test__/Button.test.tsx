import { rgba } from 'polished';
import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'assests/theme';

import Button from '../Button';

describe('<Button />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('can render a text', () => {
    const { asFragment } = render(<Button>lorem ipsum</Button>);
    expect(asFragment().textContent).toBe('lorem ipsum');
  });
  /**
   * Props: Colors
   */
  describe('renders color:', () => {
    it('primary - default', () => {
      const color = 'primary';
      const { getByRole } = render(<Button />);
      const button = getByRole('button');

      expect(button).toHaveAttribute('color', color); // styled-system adds this attribute for color
      expect(button).toHaveStyle({
        color: theme.colors.white,
        background: theme.colors[color],
      });
    });
    it('secondary', () => {
      const color = 'secondary';
      const { getByRole } = render(<Button color={color} />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        color: theme.colors.white,
        background: theme.colors[color],
      });
    });
    it('muted', () => {
      const color = 'muted';
      const { getByRole } = render(<Button color={color} />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        color: theme.colors.white,
        background: theme.colors[color],
      });
    });
    it('black', () => {
      const color = 'black';
      const { getByRole } = render(<Button color={color} />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        color: theme.colors.white,
        background: theme.colors[color],
      });
    });
    it('white', () => {
      const color = 'white';
      const { getByRole } = render(<Button color={color} />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        color: theme.colors.black,
        background: theme.colors[color],
      });
    });
  });
  /**
   * Props: Disabled
   */
  describe('renders disabled:', () => {
    it('false', () => {
      const { getByRole } = render(<Button />);
      const button = getByRole('button');

      expect(button).not.toHaveAttribute('disabled');
    });
    it('true', () => {
      const { getByRole } = render(<Button disabled />);
      const button = getByRole('button');

      expect(button).toHaveAttribute('disabled', '');
      expect(button).toHaveStyle({
        cursor: 'auto',
        color: theme.colors.white,
        background: rgba(theme.colors.muted, 0.5),
      });
    });
  });
  /**
   * Props: FullWidth
   */
  describe('renders fullWidth:', () => {
    it('false', () => {
      const { getByRole } = render(<Button />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        width: 'auto',
      });
    });
    it('true', () => {
      const { getByRole } = render(<Button fullWidth />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        width: '100%',
      });
    });
  });
  /**
   * Props: Layout
   */
  describe('renders layout:', () => {
    it('contained - default', () => {
      const color = 'primary';
      const { getByRole } = render(<Button />);
      const button = getByRole('button');
      // should render same layout of primary button
      expect(button).toHaveStyle({
        color: theme.colors.white,
        background: theme.colors[color],
      });
    });
    it('outlined', () => {
      const color = 'primary';
      const { getByRole } = render(<Button variant='outlined' />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        border: '1px solid currentColor',
        background: 'transparent',
        color: theme.colors[color],
      });
    });
  });
  /**
   * Props: Size
   */
  describe('renders size:', () => {
    it('small', () => {
      const { getByRole } = render(<Button size='small' />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        fontSize: theme.fontSizes[1],
        padding: `8px 16px`,
        borderRadius: theme.radii[2] + 'px',
      });
    });
    it('medium - default', () => {
      const { getByRole } = render(<Button />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        fontSize: theme.fontSizes[2],
        padding: `8px 16px`,
        borderRadius: theme.radii[2] + 'px',
      });
    });
    it('large', () => {
      const { getByRole } = render(<Button size='large' />);
      const button = getByRole('button');

      expect(button).toHaveStyle({
        fontSize: theme.fontSizes[3],
        padding: `12px 24px`,
        borderRadius: theme.radii[3] + 'px',
      });
    });
  });
});
