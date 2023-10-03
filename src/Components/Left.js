import {ContactContainer} from "./ContactsContainer";
import { NavChatCont } from "./NavChatCont";
import { SearchBar } from "./SearchBar";

// this is the left side of our app
export const Left = ()=>{
    return(
        <div className="h-full overflow-y-hidden flex flex-col">
        <NavChatCont/>
        <SearchBar/>
        <ContactContainer/>
       </div>
    )
}