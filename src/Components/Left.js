import {ContactContainer} from "./ContactsContainer";
import { NavChatCont } from "./NavChatCont";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { AllContacts } from "./AllContacts";
// this is the left side of our app
export const Left = ()=>{
    const  show = useSelector((state)=>state.showNewChatOption);
    const newChatOptions = useSelector((state)=>state.newChatContainer);
    return(
        <div className="h-full overflow-y-hidden flex flex-col">
        {!show && <><NavChatCont/> <SearchBar/> <ContactContainer/></>}
        {show && <><AllContacts/></>}
       </div>
    )
}