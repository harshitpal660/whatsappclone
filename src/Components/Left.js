import {ChatContainer} from "./ChatContainer";
import { NavChatCont } from "./NavChatCont";
import { SearchBar } from "./SearchBar";
export const Left = ()=>{
    return(
        <div className="h-full  min-w-fit">
        <NavChatCont/>
        <SearchBar/>
        <ChatContainer/>
       </div>
    )
}