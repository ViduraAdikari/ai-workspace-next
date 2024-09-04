import React, {useCallback, useRef} from "react";

/**
 * custom hook to set focus on a input field as required.
 */
const useFocus = (): [React.MutableRefObject<HTMLInputElement | null>, VoidFunction] => {
  const muiTextFieldRef = useRef<HTMLInputElement | null>(null);
  const setFocus = useCallback( () => {
    //mui input field reside in TextField div
    muiTextFieldRef.current && muiTextFieldRef.current.getElementsByTagName("input")[0].focus();
  }, [muiTextFieldRef]);

  return [muiTextFieldRef, setFocus];
}

export default useFocus;
