import React, { ForwardedRef, useRef } from "react";
import View from "./view";

export type InputTextProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

const InputText = React.forwardRef(
  (
    { placeholder = "", onChange }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement> | null
  ) => {
    const innerRef = useRef<HTMLInputElement | null>(null);

    ref = typeof ref !== undefined ? ref : innerRef;
    const props = { placeholder, onChange };

    return <View {...props} ref={ref} />;
  }
);

InputText.displayName = "InputText";

export default InputText;
