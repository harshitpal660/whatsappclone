import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { useDispatch, useSelector } from "react-redux";

// this a container which contain all the contact slice with which we had a conversation atleast once
export const ContactContainer = () => {
  const dispatch = useDispatch();
  // these are the chats of all the contacts
  const chats = useSelector((state) => state.chats);
  // We will create local storage

  let preview = {}
  chats.forEach(element => {
    if(element["chats"].length>0){
      const chatsLength = element.chats.length;
      const targetMessageForPreview = element.chats[chatsLength-1];
      preview[element.id] =targetMessageForPreview[element.name];
    }
    
  });

  console.log(preview);

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      {contactsDummyData.map((item) => (
        preview.hasOwnProperty(item.id) && <ContactSlice contact={item} key={item.id} preview={preview[item.id]}/>
      ))}
    </div>
  );
};
