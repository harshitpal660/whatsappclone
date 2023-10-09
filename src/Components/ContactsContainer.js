import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { useDispatch, useSelector } from "react-redux";


// this a container which contain all the contact slice with which we had a conversation atleast once
export const ContactContainer = () => {
  const dispatch = useDispatch();
  // these are the chats of all the contacts
  const chats = useSelector((state) => state.chats);
  // const contacts = contactsDummyData.reverse();

  let preview = {};
  console.log("chats ", chats);
  chats.forEach((element) => {
    if (element["chats"].length > 0) {
      const chatsLength = element.chats.length;
      const targetMessageForPreview = element.chats[chatsLength - 1];

      // here we need to debugs

      // preview[element.id] ={};
      // preview[element.id] = targetMessageForPreview[element.name];
      const currChatReview = {};
      currChatReview["time"] = targetMessageForPreview.time;
      currChatReview["date"] = targetMessageForPreview.date;
      currChatReview["month"] = targetMessageForPreview.month;
      currChatReview["year"] = targetMessageForPreview.year;
      currChatReview["data"] = targetMessageForPreview[element.name];

      preview[element.id] = currChatReview;
    }
  });


  console.log("preview", preview);

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      {contactsDummyData.map(
        (item) =>
          preview.hasOwnProperty(item.id) && (
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
      )}
    </div>
  );
};
