
import styles from "../Styles/statusLeft.module.css"
import { setStatusClicked } from "../Reducer/statusReducer";

import { useDispatch,useSelector } from "react-redux";
export const StatusSlice =({status,name})=>{
    const dispatch = useDispatch();


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

    const handleStatusClick=()=>{
        console.log("status clicked");
        dispatch(setStatusClicked(status))

    }
    console.log(preview);
    return(
        <div className="cursor-pointer flex flex-row mt-6" onClick={handleStatusClick}>
            <div className={styles.Image}>
                <div className={styles.imageWraper}>
                    <img src={preview}></img>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.Name}>
                    {name}
                </div>
                {/* <div className={styles.time}>

                </div> */}
            </div>
        </div>
    )
}