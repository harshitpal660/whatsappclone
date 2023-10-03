import { contactsDummyData } from "../dummyData/contacts";
import { ContactSlice } from "./ContactSlice";
import { useDispatch } from "react-redux";


// this a container which contain all the contact slice
export const ContactContainer = () => {
  const dispatch = useDispatch();

  // We will create local storage


  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      {contactsDummyData.map((item) => (
        <ContactSlice contact={item}/>
      ))}
    </div>
  );
};
