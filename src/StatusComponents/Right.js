import { useDispatch, useSelector } from "react-redux";
import { StatusBig } from "../Components/iconstorage";
import { Cancel } from "../Components/iconstorage";
import { Link } from "react-router-dom";
import { removeStatusClicked } from "../Reducer/statusReducer";

import styles from "../Styles/statusRight.module.css";
export const Right = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.clickedStatus);
  let statusLink = null;
  if (status.link) {
    statusLink = status.link;
  }
  console.log(status.link);

  return (
    <div className="flex flex-col justify-center h-full">
      <Link to={`/`}>
        <div className={styles.cancel} onClick={()=>dispatch(removeStatusClicked({}))}>
            <div >
            <Cancel />

            </div>
        </div>
      </Link>

      {(status.link === undefined || typeof status.link === "undefined") ? (
        <div>
          <div>
            <StatusBig />
          </div>
          <div>
            <p>Click on the contact to view their status updates</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="flex flex-row">
            <div className={`flex-1 flex flex-row ${styles.statusScroll}`}>
              {status.link.map((link) => (
                <div className={styles.statusWraper}>
                  <img src={link}></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
