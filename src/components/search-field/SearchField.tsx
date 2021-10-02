import React, {ChangeEvent} from "react";
import styles from "./SearchField.module.css";

export const SearchField: React.FC<SearchFieldPropsType> = ({filter, onChangeFilter, reset}) => {
    return <div>
        <div className={styles.inputContainer}>
            <input className={styles.input} value={filter} onChange={onChangeFilter} placeholder={'search...'}/>
            <button className={styles.button} onClick={reset}>reset</button>
        </div>
    </div>
}

//types
type SearchFieldPropsType = {
    filter: string
    onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void
    reset: () => void
}
