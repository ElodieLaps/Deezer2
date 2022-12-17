import { FilterType, SearchFilterProps } from ".";
import styles from "./styles.module.scss";

interface ViewProps extends SearchFilterProps {
  filters: FilterType[];
}

const View = (props: ViewProps) => {
  const { filters, handleTypeChange } = props;
  
  return (
    <div className={styles.searchFilters}>
      {filters.map((item: FilterType) => {
        return (
          <button key={item.type} onClick={() => handleTypeChange(item.type)}>
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default View;
