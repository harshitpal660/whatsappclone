
import styles from "../Styles/statusLeft.module.css"
import { setStatusClicked } from "../Reducer/statusReducer";

import { useDispatch } from "react-redux";

// this is a status slice which is displayed when we click on status icon
export const StatusSlice =({status,name})=>{
    const dispatch = useDispatch();

    // preview variable to showcase chat in preview
    let preview= null;

    console.log(status);
    console.log(status["link"].length);
    if(status["link"].length>0){

        console.log(status["link"][0]);
        preview = status["link"][0];
    }else if(status["video"].length>0){
        preview = status["video"][0];
    }else if(status["text"].length>0){
        preview = status["text"][0];
    }else{
        return;
    }

    // when user clicked on status slice
    const handleStatusClick=()=>{
        console.log("status clicked");
        dispatch(setStatusClicked(status))

    }
    return(
        <div className={`cursor-pointer flex flex-row mt-6 ${styles.statusSlice}`} onClick={handleStatusClick}>
            <div className={styles.Image}>
                <div className={styles.imageWraper}>
                    <img src={preview} alt=""></img>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.Name}>
                    {name}
                </div>
            </div>
        </div>
    )
}