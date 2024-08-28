"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {LocaleLabels, locales} from "@/localize/config";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import {isInConstArray} from "@/app/lib/util";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Theme} from "@mui/material/styles";
import TranslateIcon from '@mui/icons-material/Translate';

export default function LocaleSwitcher({currentLocale, tooltipTitle, withoutLabel}: {
  currentLocale?: string,
  tooltipTitle: string,
  /** show the button without selected language label*/
  withoutLabel?: boolean
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const selectedLocale = currentLocale && isInConstArray(locales, currentLocale) ? LocaleLabels[currentLocale]
    : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title={tooltipTitle}>
          <Button
            sx={{
              color: (theme: Theme) => theme.palette.text.primary,
              fontWeight: 500,
              fontSize: '.9em'
            }}
            onClick={handleClick}
            aria-controls={open ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            {!withoutLabel && <Typography sx={{fontSize: '.9rem'}}>{selectedLocale}</Typography>}
            <Avatar sx={{
              ml: withoutLabel ? 0 : 1,
              width: 32,
              height: 32,
              bgcolor: theme => theme.palette.secondary.dark,
            }}>
              <TranslateIcon/>
            </Avatar>
          </Button>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          '& .MuiPaper-root': {
            elevation: 0,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
          '& a': {
            textDecoration: 'none',
            color: 'inherit',

          },
        }}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
        {
          locales.map((locale) => {
            return (
              <Link key={locale} href={redirectedPathName(locale)}>
                <MenuItem onClick={handleClose}>
                  <Avatar sx={{
                    bgcolor: theme => theme.palette.secondary.dark,
                  }}>
                    {LocaleLabels[locale].charAt(0).toUpperCase()}
                  </Avatar> {LocaleLabels[locale]}
                </MenuItem>
              </Link>
            )
          })
        }
      </Menu>
    </React.Fragment>
  );
}
