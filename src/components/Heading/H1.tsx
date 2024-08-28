import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";

type H1Props = {
  text: string
}

const H1: React.FC<H1Props> = (props: PropsWithChildren<H1Props>) => {
  const {text} = props;

  return (
    <Typography variant='h1' aria-label={text}
                gutterBottom={false}>
      {text}
    </Typography>
  )
};

export default H1;