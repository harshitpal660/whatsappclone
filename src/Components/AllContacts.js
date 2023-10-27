import { useDispatch, useSelector } from "react-redux";
import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { Back, SearchIcon } from "./iconstorage";

import { setShowNewChat } from "../Reducer/chatContainerReducer";

import stylesAllContact from "../Styles/allContact.module.css";
import stylesSearchBar from "../Styles//searchBar.module.css";

// this component gets render when user click new chat option it contains all the contacts which we have
export const AllContacts = ({setSearchName,getSearchedContacts,name}) => {
  const dispatch = useDispatch();
  // const newChatOptions = useSelector((state) => state.showNewChatOption);
  const show = useSelector((state) => state.showNewChatOption);

  const handleBack = () => {
    console.log("back");
    dispatch(setShowNewChat(!show));
  };
  const searchNamehelper=(searchName)=>{
    console.log(searchName);
    getSearchedContacts(searchName);
}
  return (
    <div
      className={`flex flex-col h-full ${stylesAllContact.allContact}`}
    >

      {/* heading "New Chat" */}
      <div
        className={`flex flex-col justify-end ${stylesAllContact.heading}`}
      >
        <div className="flex flex-row ">
          <div onClick={handleBack} className="ml-6 mt-1 cursor-pointer">
            <Back />
          </div>

          <div className={`ml-8 ${stylesAllContact.newChat}`}><p>New Chat</p></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`pt-2 ${stylesSearchBar.top}`}>
        <div className={stylesSearchBar.searchIcon}>
          <SearchIcon />
        </div>
        <div className={stylesSearchBar.searchBar}>
          <input
            type="text"
            className={stylesSearchBar.inputTag}
            placeholder="Search name or number"
            text={(e)=>setSearchName(e.target.value)} 
            onChange={(e)=>searchNamehelper(e.target.value)}
          ></input>
        </div>
      </div>

      {/* "Contact on WhatsApp" Heading */}
      <div className={stylesAllContact.heading2}>
        <p>CONTACTS ON WHATSAPP</p>
      </div>

      {/* All Contacts Slice */}
      <div className="flex-1 overflow-auto">
        {contactsDummyData.map((item) => (
          (item.name===name || name==="" || name==="Name not found") && <ContactSlice contact={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
