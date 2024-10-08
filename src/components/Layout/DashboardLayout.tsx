"use client"

import React, {PropsWithChildren, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";
import ThemeSwitch from "@/components/Switch";
import {styled, Theme, ThemeProvider} from "@mui/material/styles";
import Logo from "@/components/Logo";
import {AUTH_FRONT_API, DRAWER_WIDTH, HOME_LINK, MOBILE_MAX_SCREEN_WIDTH} from "@/const/values";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import {getTheme} from "@/util/theme/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import Typography from "@mui/material/Typography";
import {ThemeTypes} from "@/types/types";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setIsDrawerOpen} from "@/store/features/workspace/workspaceSlice";
import {ApolloProvider} from "@apollo/client";
import {getApolloClient} from "@/app/lib/getApolloClient";
import {useRouter} from "@/localize/navigation";

export const headerHeight = 64;

export type DashboardDictionary = {
  translate: string
  closeSideBar: string
}

export type DashboardLayoutProps = {
  children: React.ReactNode
  drawer: React.ReactNode
  switchThemeLocale: string
  locale: string
  cookieTheme?: ThemeTypes
  dictionary: DashboardDictionary
}

const Main = styled("main", {shouldForwardProp: (prop) => prop !== "open"})<{
  open?: boolean;
  direction?: "ltr" | "rtl";
}>(({theme, open, direction}) => ({
  flexGrow: 1,
  marginTop: `${headerHeight}px`,
  [theme.breakpoints.down("sm")]: {
    marginTop: "56px",
  },
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...((direction || direction === "rtl") && {marginRight: 0}),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...((!direction || direction === "ltr") ? {marginLeft: 0} : {marginRight: `${DRAWER_WIDTH}px`,}),
  }),
}));

const DrawerFooter = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DashboardLayout: React.FC<DashboardLayoutProps> = (props: PropsWithChildren<DashboardLayoutProps>) => {
  const {cookieTheme, children, drawer, switchThemeLocale, locale, dictionary} = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const isDrawerOpen: boolean = useAppSelector(state => state.workspace.isDrawerOpen);

  const dispatch = useAppDispatch();

  const router = useRouter();

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDrawerOpen(window.innerWidth > MOBILE_MAX_SCREEN_WIDTH);
    }
  }, []);

  const handleOnThemeChange = (isDarkTheme: boolean) => {
    setIsDark(isDarkTheme);
  }

  const handleLogout = async () => {
    await fetch(AUTH_FRONT_API, {
      method: "DELETE",
    });

    router.push(HOME_LINK);
  }

  const theme: Theme = React.useMemo(() => {
    return getTheme(isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDrawer = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  const handleDrawerClose = () => {
    dispatch(setIsDrawerOpen(false));
  };

  const drawerElement = (
    <Stack justifyContent="space-between" sx={{
      height: `calc(100% - ${headerHeight}px)`,
    }}>
      {drawer}
      <DrawerFooter>
        <Divider sx={{mb: 1}}/>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{pl: 2}}>
          <Typography variant="caption" sx={{
            color: theme => theme.palette.text.disabled
          }}>
            version 1.0.0
          </Typography>
          <IconButton onClick={handleDrawerClose} title={dictionary.closeSideBar}>
            {theme.direction === "ltr" ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </Stack>
      </DrawerFooter>
    </Stack>
  );

  return (
    <ApolloProvider client={getApolloClient()}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth={false} sx={{px: "0 !important",}}>
          <Box sx={{display: "flex", mt: 0}}>

            <AppBar position="fixed"
                    sx={{
                      bgcolor: (theme: Theme) => theme.palette.primary.contrastText,
                      color: (theme: Theme) => theme.palette.text.primary,
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                      borderBottom: "2px solid",
                      borderBottomColor: (theme: Theme) => theme.palette.primary.main,
                    }}>
              <Toolbar sx={{px: {md: 0, sm: 2}}}>
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer"
                  edge={theme.direction === "ltr" ? "start" : "end"}
                  onClick={toggleDrawer}
                  sx={{mx: 2}}
                  title="open drawer"
                >
                  <MenuIcon/>
                </IconButton>

                <Stack direction="row" justifyContent="space-between" alignItems="center"
                       sx={{width: "100%"}}>
                  <Box>
                    <Logo/>
                  </Box>

                  <Stack direction="row" alignItems="center" spacing={{xs: 1, sm: 2}} mr={3}>

                    <LocaleSwitcher currentLocale={locale} tooltipTitle={dictionary.translate} withoutLabel/>

                    <ThemeSwitch onChange={handleOnThemeChange} isChecked={isDark}
                                 dictionaryTitle={switchThemeLocale}/>
                    <Box title="Logout" sx={{pt: 1, cursor: "pointer"}} onClick={handleLogout}>
                      <PowerSettingsNewIcon/>
                    </Box>
                  </Stack>
                </Stack>
              </Toolbar>
            </AppBar>

            <nav>
              <Drawer
                anchor={theme.direction === "ltr" ? "left" : "right"}
                variant="persistent"
                open={isDrawerOpen}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  bgcolor: "transparent",
                  width: DRAWER_WIDTH,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                  },
                }}>
                <Toolbar/>
                {drawerElement}
              </Drawer>
            </nav>

            <Main open={isDrawerOpen} direction={theme.direction}>
              {children}
            </Main>
          </Box>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};


export default DashboardLayout;
