
import styles from "../Styles/app.module.css";

import { Routes, Route } from "react-router-dom";
import { Main } from "../Page/Main";
import { Status } from "../Page/Status";
// import { ChatContainer } from "./ChatContainer";
function App() {
  return (
    <div className={styles.App}>
      {/* In my app we have two components one is chat window and other is all chat options */}

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/status" element={<Status />}></Route>
      </Routes>
    </div>
  );
}

export default App;
