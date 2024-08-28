import React, {FC} from 'react';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "@/localize/navigation";

const SiteFooter: FC = () => {
  return (
    <Stack justifyContent="flex-end"
           alignItems="center"
           spacing={.5}
           direction="row" sx={{
      py: 2,
    }}>
      <Typography variant="caption" sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItem: "center"
      }}>
        &copy; {new Date().getFullYear()}. Made with
      </Typography>
      <FavoriteBorderOutlinedIcon sx={{
        fontSize: 10,
      }}/>
      <Typography variant="caption" sx={{
        "& a": {
          color: "inherit",
        },
      }}>
        by {" "}
        <Link href="https://www.viduraadikari.com"
              target="_blank">
          Vidura Adikari
        </Link>
      </Typography>
    </Stack>
  )
}

export default SiteFooter;
