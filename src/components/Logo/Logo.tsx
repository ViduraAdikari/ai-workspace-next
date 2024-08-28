import React from "react";
import {HOME_LINK} from "@/const/values";
import Box from "@mui/material/Box";
import {Link} from "@/localize/navigation";

const Logo: React.FC = () => {
  return (
    <Box sx={{
      '& a': {
        textDecoration: 'none',
        color: 'inherit'
      }
    }}>
      <Link href={HOME_LINK} title="Home">
        <Box sx={{
          '& .logo': {
            width: "120px",
            height: "auto",
            borderRadius: "7px"
          }
        }}>
          AI Workspace
        </Box>
      </Link>
    </Box>
  );
}

export default Logo;
