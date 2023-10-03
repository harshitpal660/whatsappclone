import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "../../Styles/chatWindow.module.css"


// this is a boiler plate code for different types of messages
export const SendersTextMessage = () => {
    // const text = useSelector((state)=>state.demo)
  return (
    <div className={`flex flex-row`}>
      <div className={`h-fit w-fit max-w-lg ${styles.message}`}>
        {/* {text} */}
      </div>
    </div>
  );
};

export const SendersLinkPhotos = ({ message }) => {
  return <div>message</div>;
};
