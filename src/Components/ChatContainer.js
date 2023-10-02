import { contactsDummyData } from "../dummyData/contacts";
import { ChatSlice } from "./ChatSlice";
import { useDispatch } from "react-redux";

export const ChatContainer = () => {
  const dispatch = useDispatch();


  return (
    <div className="flex flex-col">
      {contactsDummyData.map((item) => (
        <ChatSlice contact={item}/>
      ))}
    </div>
  );
};
