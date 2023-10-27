import { UnreadFilter,Archives,SearchIcon } from "./iconstorage"
import styles from "../Styles/searchBar.module.css"

// this a search bar where we search different chat options or contacts
export const SearchBar=({setSearchName,searchName,getSearchedContacts})=>{

    const searchNamehelper=(searchName)=>{
        console.log(searchName);

        getSearchedContacts(searchName);
    }

    
    return( 
        <div className="flex flex-col cursor-pointer w-full">
            <div className="p-2  ml-5">
                <div className={styles.top}>
                    <div className={styles.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <div className={styles.searchBar}>
                        <input type="text" className={styles.inputTag} text={(e)=>setSearchName(e.target.value)} onChange={(e)=>searchNamehelper(e.target.value)}></input>
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
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}