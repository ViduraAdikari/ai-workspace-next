import React, {PropsWithChildren} from 'react';

import H1 from "./H1";
import H2 from "./H2";
import {HeadingTypes} from "@/types/types";

type HeadingProps = {
  type: HeadingTypes //'h1' | 'h2'
  text: string
}

/**
 * Facade for h1, h2 for storybook and app.
 * @constructor
 */
const Heading: React.FC<HeadingProps> = (props: PropsWithChildren<HeadingProps>) => {
  const {type, text} = props;

  const headingByType = {
    'h1': <H1 text={text}/>,
    'h2': <H2 text={text}/>,
  }

  return (
    <React.Fragment>
      {headingByType[type]}
    </React.Fragment>
  )
};

export default Heading;
