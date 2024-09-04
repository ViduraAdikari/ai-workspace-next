import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";

type H2Props = {
  text: string
}

const H2: React.FC<H2Props> = (props: PropsWithChildren<H2Props>) => {
  const {text} = props;

  return (
    <Typography variant='h2' aria-label={text}
                gutterBottom={true}>
      {text}
    </Typography>
  )
};

export default H2;