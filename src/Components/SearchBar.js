import { UnreadFilter,Archives,SearchIcon } from "./iconstorage"
import styles from "../Styles//searchBar.module.css"
export const SearchBar=()=>{
    return(
        <div className="flex flex-col cursor-pointer">
            <div className="p-2 w-full ml-5">
                <div className={styles.top}>
                    <div className={styles.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <div className={styles.searchBar}>
                        <input type="text" className={styles.inputTag} placeholder="Search or start new chat"></input>
                    </div>
                    <div className={styles.unreadFilter}><UnreadFilter/></div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.archive}>
                        <Archives/>
                    </div>
                    <div className={styles.heading}>
                        <p>Archived</p>
                    </div>
                    <div className={styles.archiveCount}>
                        <p>11</p>
                    </div>
                </div>
            </div>
        </div>
    )
}