import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from 'assests/theme';
import '@testing-library/jest-dom';

function render(ui: any, options?: any) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
