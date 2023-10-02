import { Left } from "./Left";
import { Right } from "./Right";
import styles from "../Styles/app.module.css"
// import { ChatContainer } from "./ChatContainer";
function App() {

  return (
    <div className={styles.App}>
      {/* In my app we have two components one is chat window and other is all chat options */}
      <div className={`flex flex-column h-full`}>
        <div className={styles.leftView}>
          <Left />

        </div>
        <div className={styles.rightView}>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
