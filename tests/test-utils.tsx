import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';


const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  // TODO: update this to accept options like render(ui, { wrapper: Providers, ...options });
  render(ui);
};

export * from '@testing-library/react';

export { customRender as render };
