import React, {PropsWithChildren, ReactElement} from 'react';
import {render, RenderOptions} from "@testing-library/react";
import {Theme, ThemeProvider} from "@mui/material/styles";
import {getTheme} from "@/util/theme/Theme";

type AllTheProvidersProps = {
  children: React.ReactNode
}

const AllTheProviders: React.FC<AllTheProvidersProps> = (props: PropsWithChildren<AllTheProvidersProps>) => {
  const theme: Theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
