import { FilterType, SearchFilterProps } from ".";
import styles from "./styles.module.scss";

interface ViewProps extends SearchFilterProps {
  filters: FilterType[];
}

const View = (props: ViewProps) => {
  const { filters, handleTypeChange, selected = null } = props;

  return (
    <div className={styles.searchFilters}>
      {filters.map((item: FilterType) => {
        return (
          <button key={item.type} onClick={() => handleTypeChange(item.type)}>
            <span className={`${item.type === selected && styles.selected}`}>
              <>
                {item.label}
                {console.log("type", selected, item.type)}
              </>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default View;
