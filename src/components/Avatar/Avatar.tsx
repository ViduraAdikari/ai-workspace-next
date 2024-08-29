import React, {PropsWithChildren} from 'react';
import Box from "@mui/material/Box";
import {AvatarIcon} from "@/types/types";
import Image from "next/image";

type AvatarProps = {
  avatarIcon: AvatarIcon
}

const Avatar: React.FC<AvatarProps> = (props: PropsWithChildren<AvatarProps>) => {

  const {avatarIcon} = props;

  return (
    <Box sx={{
      p: 1,
      width: '45px',
      height: '45px',
      flex: 'none',
      borderRadius: '.5em',
      bgcolor: avatarIcon.color,
      '& img': {
        width: '100%',
        height: "auto"
      }
    }}>
      <Image src={avatarIcon.icon} alt={avatarIcon.alt}/>
    </Box>
  )
};

export default Avatar;
