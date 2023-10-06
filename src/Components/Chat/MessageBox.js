import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "../../Styles/chatWindow.module.css";
import { json } from "react-router-dom";

// this is a boiler plate code for different types of messages
export const SendersTextMessage = ({ item,name }) => {
  // const text = useSelector((state)=>state.demo)
  // console.log(item,name,item[JSON.stringify(item.name)]);

  return (
    <div className={`flex flex-row w-full`}>
      <div className={`h-fit w-fit max-w-lg ${styles.message}`}>{item[item.name]}</div>
    </div>
  );
};

export const SendersLinkPhotos = ({ message }) => {
  return <div>message</div>;
};
