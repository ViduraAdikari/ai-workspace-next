"use client";

import React, {FC, PropsWithChildren} from 'react';
import StoreProvider from "@/app/StoreProvider";
import {ThemeTypes} from "@/types/types";
import {SiteLayout} from "@/components/Layout";
import {HomeNavbarDictionary} from "@/components/Navbar/NavbarHome";

export type DashboardLayoutProps = {
  children: React.ReactNode
  locale: string
  cookieTheme?: ThemeTypes
  navBarDictionary: HomeNavbarDictionary
}

const DashboardStoreWrapper: FC<DashboardLayoutProps> = (props: PropsWithChildren<DashboardLayoutProps>) => {

  const {children, ...otherProps} = props;

  return (
    <StoreProvider>
      <SiteLayout {...otherProps}>
        {children}
      </SiteLayout>
    </StoreProvider>
  )
};

export default DashboardStoreWrapper;
