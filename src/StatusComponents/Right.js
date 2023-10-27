import { useDispatch, useSelector } from "react-redux";
import { StatusBig } from "../Components/iconstorage";
import { Cancel } from "../Components/iconstorage";
import { Link } from "react-router-dom";
import { removeStatusClicked } from "../Reducer/statusReducer";

import styles from "../Styles/statusRight.module.css";

// right side of status page
export const Right = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.clickedStatus);
  console.log(status.link);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 mt-8">

        {/* canccel button we get redirected to main page */}
        <Link to={`/`}>
          <div
            className={styles.cancel}
            onClick={() => dispatch(removeStatusClicked({}))}
          >
            <div className="">
              <Cancel />
            </div>
          </div>
        </Link>

        {(status.link === undefined || typeof status.link === "undefined") ? (
          <div>

            {/* status icon */}
            <div className="w-fit m-auto">
              <StatusBig />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <div className={`flex-1 flex flex-row ${styles.statusScroll}`}>
                {/* all status of clicked status slice */}
                {status.link.map((link) => (
                  <div className={styles.statusWraper}>
                    <img src={link} alt=""></img>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {(status.link === undefined || typeof status.link === "undefined") && <div className="mb-32 ">
        <div>
          <p className={`text-center ${styles.text}`}> Click on the contact to view their status updates</p>
        </div>
      </div>}
    </div>
  );
};
