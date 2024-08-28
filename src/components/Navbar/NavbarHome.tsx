import React, {PropsWithChildren} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import {Theme} from "@mui/material/styles";
import {usePathname} from "next/navigation";
import Stack from "@mui/material/Stack";
// import {Link} from "@/localize/navigation";
// import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import ThemeSwitch from "@/components/Switch";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";

const drawerWidth = 240;

export type HomeNavbarDictionary = {
  translate: string
  switchTheme: string
};

type NavbarHomeProps = {
  onThemeChange: (isDarkTheme: boolean) => void
  prefersDarkMode: boolean
  locale: string
  dictionary: HomeNavbarDictionary
}

const NavbarHome: React.FC<NavbarHomeProps> = (props: PropsWithChildren<NavbarHomeProps>) => {
  const {prefersDarkMode, locale, dictionary} = props;

  const pathname = "/" + usePathname().split("/").slice(2).join("/");

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'left'}}>

      <Box sx={{py: 1, px: 2}}>
        {/*<Logo/>*/}
      </Box>

      <Divider/>
    </Box>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav" position="relative" elevation={0}
              sx={{
                borderRadius: {xs: 0, sm: "25px"},
                bgcolor: 'transparent',
                color: (theme: Theme) => theme.palette.text.primary
              }}>
        <Toolbar sx={{px: {md: 0, sm: 2}}}>

          <Stack direction="row" justifyContent="space-between" alignItems="center"
                 sx={{width: '100%'}}>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Box>
                {/*<Logo/>*/}
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={{xs: 0, md: 2}}>
              <LocaleSwitcher currentLocale={locale} tooltipTitle={dictionary.translate}/>
              <ThemeSwitch onChange={props.onThemeChange} isChecked={prefersDarkMode}
                           dictionaryTitle={dictionary.switchTheme}/>
            </Stack>

          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ml: 0, display: {sm: 'none'}}}
            title="open drawer"
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};


export default NavbarHome;
