import {Left} from "../Components/Left"
import {Right} from "../Components/Right"
import styles from "../Styles/app.module.css";

// this is the main Page of the chatting app
export const Main = () => {
  return (
    <div className={styles.App}>
      {/* In my app we have two components one is chat window and other is all chat options */}

      <div className={`flex flex-column h-full`}>

        {/* This is the left part of the app */}
        <div className={styles.leftView}>
          <Left />
        </div>
        {/* This is the right part of the app */}
        <div className={styles.rightView}>
          <Right />
        </div>
      </div>
    </div>
  );
};
