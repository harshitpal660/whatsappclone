import { Mike,Emoji,Plus,Send } from "./iconstorage"
import styles from "../Styles/typing.module.css"

import { isTyping } from "../Reducer/chatWindowReducer"
import { isLoading } from "../Reducer/chatWindowReducer"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
export const TrypingArea =()=>{
    const text = useSelector((state)=> state.typing); 
    const loading = useSelector((state)=>state.loading);
    const dispatch = useDispatch();
    const handleInputChange = (e)=>{
        const newText = e.target.value;
        dispatch(isTyping(newText))
    }

    const handleSend = ()=>{
        
        dispatch(isLoading(true));
    }
    return( 
        <div className={styles.typing}>
            <div className="p-2 cursor-pointer">
            <Emoji/>
            </div>
            <div className="p-2 cursor-pointer">
            <Plus/>
            </div>
            <input placeholder="Type a message" className={styles.message} type="text" onChange={handleInputChange}>
            </input>
            <div className="p-2 cursor-pointer">
            {text.length===0?(<div><Mike/></div>):(<div onClick={handleSend}><Send/></div>)}
            </div>
        </div>
    )
}