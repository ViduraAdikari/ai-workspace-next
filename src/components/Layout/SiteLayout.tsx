"use client";

import React, {PropsWithChildren, useEffect, useState} from "react";
import {Theme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavbarHome from "@/components/Navbar";
import {getTheme} from "@/util/theme/Theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ThemeTypes} from "@/types/types";
import {HomeNavbarDictionary} from "@/components/Navbar/NavbarHome";
import Stack from "@mui/material/Stack";
import SiteFooter from "@/components/Layout/SiteFooter";

type SiteLayoutProps = {
  children: React.ReactNode
  locale: string
  navBarDictionary: HomeNavbarDictionary
  cookieTheme?: ThemeTypes
}

const SiteLayout: React.FC<SiteLayoutProps> = (props: PropsWithChildren<SiteLayoutProps>) => {

  const {cookieTheme, children, locale, navBarDictionary} = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(cookieTheme === "dark");

  useEffect(() => {
    document.cookie = `theme=${isDark ? "dark" : "light"};path=/;`;
    const html = document.querySelector("html");
    html && html.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (cookieTheme) { //priority to user selected theme
      return;
    }
    setIsDark(prefersDarkMode); //if user has not already selected a theme.
  }, [prefersDarkMode]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnThemeChange = (isDarkTheme: boolean) => {
    setIsDark(isDarkTheme);
  }

  const theme: Theme = React.useMemo(() => {
    return getTheme(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Stack direction="column" justifyContent="space-between" sx={{
        minHeight: {xs: "calc(100vh - 54px)", lg: "100vh"},
      }}>

        <Container maxWidth="xl" sx={{
          px: {xs: 0, sm: 2, lg: 1}
        }}>
          <header>
            <Box sx={{
              mt: {xs: 0, sm: 4},
            }}>
              <NavbarHome locale={locale}
                          prefersDarkMode={isDark}
                          dictionary={navBarDictionary}
                          onThemeChange={handleOnThemeChange}/>
            </Box>
          </header>
          <main>
            {children}
          </main>

        </Container>
        <footer>
          <Container maxWidth={false} sx={{
            borderTop: "1px dotted",
            borderTopColor: theme => theme.palette.text.secondary,
          }}>
            <SiteFooter/>
          </Container>
        </footer>
      </Stack>
    </ThemeProvider>
  )
}

export default SiteLayout;
