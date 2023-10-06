import { useDispatch, useSelector } from "react-redux";
import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { Back,SearchIcon } from "./iconstorage";

import { setShowNewChat } from "../Reducer/chatContainerReducer";

import stylesAllContact from "../Styles/allContact.module.css"
import stylesSearchBar from "../Styles//searchBar.module.css"


// this component gets render when user click new chat option
export const AllContacts = () => {
  const dispatch = useDispatch();
  const newChatOptions = useSelector((state) => state.showNewChatOption);
  const  show = useSelector((state)=>state.showNewChatOption);

  const handleBack=()=>{
    console.log("back");
    dispatch(setShowNewChat(!show))
  }
  return (
    <div className={`flex flex-col h-full overflow-auto ${stylesAllContact.allContact}`}>
      <div>
        <div className="cursor-pointer" onClick={handleBack}>
          <Back />
        </div>

        <div className="">New Chat</div>
      </div>
      <div className={stylesSearchBar.top}>
        <div className={stylesSearchBar.searchIcon}>
          <SearchIcon />
        </div>
        <div className={stylesSearchBar.searchBar}>
          <input
            type="text"
            className={stylesSearchBar.inputTag}
            placeholder="Search name or number"
          ></input>
        </div>
      </div>

      <div><p>CONTACTS ON WHATSAPP</p></div>
      {contactsDummyData.map((item) => (
        <ContactSlice contact={item} key={item.id} />
      ))}
    </div>
  );
};
