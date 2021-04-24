import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { lighten, rgba, saturate } from 'polished';

interface IButton {
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the button will be full width.
   */
  fullWidth?: boolean;
  /**
   * Takes of 'only', 'withText', It will adapt the button to have an icon.
   */
  icon?: 'only' | 'withText';
  /**
   * Takes one of 'primary', 'secondary', 'tertirary', "black", "white". corresponds to buttons colors
   */
  color?: 'primary' | 'secondary' | 'muted' | 'black' | 'white';
  /**
   * Takes one of 'small', 'medium', 'large'. corresponds to buttons sizes
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Takes one of 'text', 'outlined', 'contained'. corresponds to buttons variations
   */
  variant?: 'text' | 'outlined' | 'contained';
  /**
   * Takes a function
   */
  onClick?: (event: any) => void;
  /**
   * Allows more props. corresponds to ...other
   */
  [propName: string]: any;
}

const StyledButton = styled('button')<IButton>(
  (props) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: props.fullWidth ? 'center' : 'auto',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    width: props.fullWidth ? '100%' : 'auto',
    opacity: props.disabled ? 0.5 : 1,
    borderRadius: 5,
    textDecoration: 'none',
    transition: 'background 0.3s ease',
    'svg, span': {
      marginRight: props.icon === 'withText' ? 5 : undefined,
    },
    '&:disabled': {
      cursor: 'auto',
    },
  }),
  // color
  ({ theme, color = 'primary' }) =>
    variant({
      prop: 'color',
      variants: {
        primary: {
          color: theme.colors.white,
          background: theme.colors[color],
          '&:hover': {
            background: saturate(1, lighten(0.05, theme.colors[color])),
          },
        },
        secondary: {
          color: theme.colors.white,
          background: theme.colors[color],
          '&:hover': {
            background: saturate(1, lighten(0.05, theme.colors[color])),
          },
        },
        muted: {
          color: theme.colors.white,
          background: theme.colors[color],
          '&:hover': {
            background: lighten(0.2, theme.colors[color]),
          },
        },
        black: {
          color: theme.colors.white,
          background: theme.colors[color],
          '&:hover': {
            background: lighten(0.2, theme.colors[color]),
          },
        },
        white: {
          color: theme.colors.black,
          background: theme.colors[color],
          '&:hover': {
            background: lighten(0.2, theme.colors[color]),
          },
        },
      },
    }),
  // size
  ({ theme }) =>
    variant({
      prop: 'size',
      variants: {
        small: {
          fontSize: theme.fontSizes[1],
          padding: `8px 16px`,
          borderRadius: theme.radii[2],
        },
        medium: {
          fontSize: theme.fontSizes[2],
          padding: `8px 16px`,
          borderRadius: theme.radii[2],
        },
        large: {
          fontSize: theme.fontSizes[3],
          padding: `12px 24px`,
          borderRadius: theme.radii[3],
        },
      },
    }),
  // variant
  ({ theme, color = 'primary' }) =>
    variant({
      prop: 'variant',
      variants: {
        contained: {
          '&:disabled': {
            background: rgba(theme.colors.muted, 0.5),
            color: theme.colors.white,
          },
        },
        outlined: {
          border: '1px solid currentColor',
          background: 'transparent',
          color: theme.colors[color],
          '&:disabled': {
            color: rgba(theme.colors.muted, 0.5),
          },
          '&:hover': {
            background: rgba(theme.colors[color], 0.05),
            '&:disabled': {
              background: 'transparent',
              color: rgba(theme.colors.muted, 0.5),
            },
          },
        },
        text: {
          background: 'transparent',
          color: theme.colors[color],
          '&:disabled': {
            color: rgba(theme.colors.muted, 0.5),
          },
          '&:hover': {
            background: 'transparent',
            textDecoration: 'underline',
          },
        },
      },
    }),
);

const Button = ({
  onClick,
  disabled,
  children,
  color = 'primary',
  fullWidth = false,
  size = 'medium',
  variant = 'contained',
  ...other
}: IButton) => {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      {...other}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
