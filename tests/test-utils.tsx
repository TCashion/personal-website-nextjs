import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';

const Providers: FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
