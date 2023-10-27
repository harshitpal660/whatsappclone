import { ContactContainer } from "./ContactsContainer";
import { NavChatCont } from "./NavChatCont";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { AllContacts } from "./AllContacts";
import { useState,useEffect } from "react";
import { contactsDummyData } from "../dummyData/contacts";
// this is the left side of main page
export const Left = () => {
  const show = useSelector((state) => state.showNewChatOption);
  const [searchName, setSearchName] = useState("");


  // this function will return search result from the contact list
  const getSearchedContacts = (searchNameString) => {
    console.log(searchNameString);
    const result = contactsDummyData.find(item => item.name === searchNameString);
    if(result===undefined){
      console.log("if");
      setSearchName( "Name not found")
    }else{
      console.log("else");
      setSearchName(result.name) 
    }
    
  };

  useEffect(()=>{
    console.log("inside name", searchName);
  },[searchName])

  

  return (
    <div className="h-full overflow-y-hidden flex flex-col">

      {/* here contacts from with we have a conversation that displays here */}
      {!show && (
        <>
          <NavChatCont />{" "}
          <SearchBar
            setSearchName={setSearchName}
            searchName={searchName}
            getSearchedContacts={getSearchedContacts}
          />{" "}
          <ContactContainer name={searchName}/>
        </>
      )}

      {/* when click click on new chats then all contacts displayed */}
      {show && (
        <>
          <AllContacts 
          setSearchName={setSearchName}
            getSearchedContacts={getSearchedContacts}
            name={searchName}
            />
        </>
      )}
    </div>
  );
};
