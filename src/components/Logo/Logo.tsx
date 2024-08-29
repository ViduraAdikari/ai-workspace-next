import React from "react";
import {HOME_LINK} from "@/const/values";
import Box from "@mui/material/Box";
import {Link} from "@/localize/navigation";
import Typography from "@mui/material/Typography";

const Logo: React.FC = () => {
  return (
    <Box sx={{
      "& a": {
        textDecoration: "none",
        color: "inherit"
      }
    }}>
      <Link href={HOME_LINK} title="Home">
        <Box sx={{
          "& .logo": {
            width: "120px",
            height: "auto",
            borderRadius: "7px"
          }
        }}>
          <Typography>
            AI Workspace
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default Logo;
