"use client";

import React, {FC, PropsWithChildren} from 'react';
import StoreProvider from "@/app/StoreProvider";
import {ThemeTypes} from "@/types/types";
import {DashboardDictionary} from "@/components/Layout/DashboardLayout";
import {DashboardLayout} from "@/components/Layout";

export type DashboardLayoutProps = {
  children: React.ReactNode
  drawer: React.ReactNode
  switchThemeLocale: string
  locale: string
  cookieTheme?: ThemeTypes
  dictionary: DashboardDictionary
}

const StoreWrapper: FC<DashboardLayoutProps> = (props: PropsWithChildren<DashboardLayoutProps>) => {

  const {children, ...otherProps} = props;

  return (
    <StoreProvider>
      <DashboardLayout {...otherProps}>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
};

export default StoreWrapper;
