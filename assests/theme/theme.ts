const colors = {
  primary: '#615cf5',
  secondary: '#684e79',
  muted: '#536075',
  black: '#1c1c27',
  white: '#fff',
};

const theme = {
  fonts: {
    body: `'Open Sans', Helvetica, Arial, sans-serif`,
    heading: `'Work Sans', Helvetica, Arial, sans-serif`,
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWheights: {
    body: [0, 400, 700],
    heading: [0, 600],
  },
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    muted: colors.muted,
    black: colors.black,
    white: colors.white,
    gradient: `linear-gradient(90deg, ${colors.black} 0%, ${colors.muted} 100%)`,
  },
  radii: [0, 2, 4, 8],
};

export default theme;
