import React, { ForwardedRef } from "react";
import { InputTextProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = InputTextProps;

const View = React.forwardRef(
  (props: ViewProps, ref: ForwardedRef<HTMLInputElement> | null) => {
    const { placeholder, onChange } = props;
    const inputElement = typeof ref !== "function" ? ref?.current : null;

    return (
      <input
        spellCheck="false"
        ref={ref}
        className={styles.inputText}
        type="text"
        placeholder={placeholder}
        onChange={() => !!inputElement && onChange(inputElement.value)}
      />
    );
  }
);

View.displayName = "View";

export default View;
