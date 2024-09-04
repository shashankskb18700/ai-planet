import { useState, useEffect } from "react";

import "./details.css";

const Details = () => {
  const [item, setItems] = useState();
  console.log(item);

  useEffect(() => {
    const retrieveItem = JSON.parse(localStorage.getItem("lastItem"));

    setItems(retrieveItem);
  }, []);
  return (
    <div>
      {item != undefined ? (
        <div>
          <div className="impDetails">
            <div>
              <p className="dateDetails">
                {item.status == "active" ? (
                  <div>
                    <p>Starts on {new Date(item.startDate).toDateString()}</p>
                  </div>
                ) : (
                  <div>
                    <p>Ends on {new Date(item.endDate).toDateString()}</p>
                  </div>
                )}
              </p>

              <p className="detailTitle">{item.title}</p>

              <p className="detailLevel">Level : {item.level}</p>
            </div>
          </div>

          <div className="detailSubHeader">
            <div>Overview</div>
            <div>
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>

          <div className="description">{item.description}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
