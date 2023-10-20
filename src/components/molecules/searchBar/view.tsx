import InputText from "@/components/atoms/inputText";
import SearchFilter from "@/components/atoms/searchFilter";
import { useRef } from "react";
import { SearchBarProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = SearchBarProps;

const View = (props: ViewProps) => {
  const {
    placeholder,
    handleKeywordChange,
    handleTypeChange,
    hasKeywordOrResult,
    selected,
  } = props;
  const ref = useRef<HTMLInputElement | null>(null);
  const searchFilterProps = { handleTypeChange, selected };

  return (
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <InputText
          ref={ref}
          placeholder={placeholder}
          onChange={handleKeywordChange}
        />
        {hasKeywordOrResult && (
          <button
            className={styles.clearButton}
            onClick={() => {
              if (ref?.current) {
                ref.current.value = "";
                handleKeywordChange("");
              }
            }}
          >
            Supprimer
          </button>
        )}
      </div>
      <SearchFilter {...searchFilterProps} />
    </div>
  );
};

View.displayName = "View";

export default View;
