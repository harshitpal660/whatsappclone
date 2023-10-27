import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// this a container which contain all the contact slice with which we had a conversation atleast once
export const ContactContainer = ({name}) => {
  // these are the chats of all the contacts
  const chats = useSelector((state) => state.chats);
  // const contacts = contactsDummyData.reverse();

  let preview = {};
  chats.forEach((element) => {
    if (element["chats"].length > 0) {
      const chatsLength = element.chats.length;
      const targetMessageForPreview = element.chats[chatsLength - 1];

      const currChatReview = {};
      currChatReview["time"] = targetMessageForPreview.time;
      currChatReview["date"] = targetMessageForPreview.date;
      currChatReview["month"] = targetMessageForPreview.month;
      currChatReview["year"] = targetMessageForPreview.year;
      currChatReview["data"] = targetMessageForPreview[element.name];

      preview[element.id] = currChatReview;
    }
  });

  useEffect(()=>{
    console.log("name", name);
  },[name])

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      {contactsDummyData.map(
        (item) =>{
          console.log(preview.hasOwnProperty(item.id) && (item.name===name || name==="" || name==="name not found"));
          console.log(item.name===name || name==="" || name==="Name not found");
          console.log(item.name);
          console.log(name);
          return (preview.hasOwnProperty(item.id) && (item.name===name || name==="" || name==="Name not found")) && (
            <ContactSlice
              contact={item}
              key={item.id}
              preview={preview[item.id].data}
              time={preview[item.id].time}
              date={preview[item.id].date}
              month={preview[item.id].month}
              year={preview[item.id].year}
            />
          )
        }
        
        
      
          
      )}
    </div>
  );
};
