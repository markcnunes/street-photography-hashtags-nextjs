import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

interface MockNextRouterProps extends Partial<NextRouter> {
  children?: ReactNode;
}

/**
 * Override the default NextRouter render with different attributes.
 * e.g. change the path or locale for tests.
 */

const MockNextRouter = ({ children, ...props }: MockNextRouterProps) => {
  const mockRouter: NextRouter = {
    route: '/',
    pathname: '',
    query: {},
    asPath: '/',
    basePath: '',
    locale: 'en',
    locales: [''],
    defaultLocale: 'en',
    // domainLocales?: DomainLocales,
    isLocaleDomain: true,
    push: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
    reload: jest.fn(() => Promise.resolve(true)),
    back: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(),
    beforePopState: jest.fn(() => Promise.resolve(true)),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    isPreview: false,
  };

  return (
    <RouterContext.Provider value={{ ...mockRouter, ...props }}>
      {children}
    </RouterContext.Provider>
  );
};

export default MockNextRouter;
