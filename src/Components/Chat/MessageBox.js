import styles from "../../Styles/chatWindow.module.css";


// this is a boiler plate code for messages
export const SendersTextMessage = ({ item }) => {
  // const text = useSelector((state)=>state.demo)
  console.log(item);

  return (
    <div className={`flex flex-row w-full`}>
      <div className={`h-fit w-fit max-w-lg ${styles.message}`}> <div className={styles.text}>{item[item.name]}</div> <div className={styles.time}>{item.time}</div></div>
    </div>
  );
};

