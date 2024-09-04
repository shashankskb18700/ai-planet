import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

import HackathonCard from "../hackethonCard/hackethonCard";

import "./hackathonCatalog.css";
import Search from "../../assets/icons/icons8-search.svg";
import img1 from "../../assets/cardimage/Group 1000002466.png";

import downChevron from "../../assets/icons/down-chevron-svgrepo-com.svg";
import upChevron from "../../assets/icons/up-chevron-svgrepo-com.svg";

const items = [
  {
    img: { img1 },
    status: "Active",
    title: "datasceince",
    level: "Easy",
    time: 2,
  },
  {
    img: { img1 },
    status: "Upcomming",
    title: "datasceince",
    level: "easy",
    time: 902232,
  },
  {
    img: { img1 },
    status: "Past",
    title: "datasceince",
    level: "medium",
    time: 20000320,
  },
];

const HackathonCatalog = () => {
  const [items, setItems] = useState([]);
  const [filterState, setFilterState] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const retrieveHackathon = JSON.parse(localStorage.getItem("hackathons"));
    filterItems();

    if (items.length == 0) {
      setItems(retrieveHackathon);
    }
  }, [items, selectedFilters]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter(
          (item) =>
            (item.status.toLowerCase() === selectedCategory.toLowerCase()) |
            (item.level.toLowerCase() === selectedCategory.toLowerCase())
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  const handleDetails = (item) => {
    console.log(item);
    localStorage.setItem("lastItem", JSON.stringify(item));

    window.location = "/details";
  };

  return (
    <div>
      <div className="hackathonCatalog">
        <div>
          Explore Challenges
          <div className="searchCont">
            <div className="search">
              <span>
                <img src={Search}></img>
                <input type="text" placeholder={"Search"}></input>{" "}
              </span>
            </div>
            <div>
              <button onClick={() => setFilterState(!filterState)}>
                Filter <img src={downChevron}></img>
              </button>
              <div
                className={filterState ? "blackOverlay" : "hideCont"}
                onClick={() => setFilterState(!filterState)}
              ></div>
              <div className={filterState ? "selectCont" : "hideCont"}>
                <p>
                  Filter <img src={upChevron}></img>
                </p>
                <p>Status</p>
                <span>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> All</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Active"
                    name="Active"
                    value="Active"
                    onClick={() => handleFilterButtonClick("Active")}
                  />
                  <label htmlFor="Active">Active</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Upcomming"
                    name="Upcomming"
                    value="Upcomming"
                    onClick={() => handleFilterButtonClick("Upcomming")}
                  />
                  <label htmlFor="Upcomming"> Upcomming</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Past"
                    name="Past"
                    value="Past"
                    onClick={() => handleFilterButtonClick("Past")}
                  />
                  <label for="Past">Past</label>
                </span>

                <p>Level</p>
                <span>
                  <input
                    type="checkbox"
                    id="Easy"
                    name="Easy"
                    value="Easy"
                    onClick={() => handleFilterButtonClick("Easy")}
                  />
                  <label htmlFor="Easy"> Easy</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Medium"
                    name="Medium"
                    value="Medium"
                    onClick={() => handleFilterButtonClick("Medium")}
                  />
                  <label htmlFor="Medium">Medium</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    id="Hard"
                    name="Hard"
                    value="Hard"
                    onClick={() => handleFilterButtonClick("Hard")}
                  />
                  <label htmlFor="Hard"> Hard</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hackethonContainer">
          <div>
            {filteredItems.map((item, idx) => (
              <div
                key={`items-${idx}`}
                className="item"
                onClick={() => handleDetails(item)}
              >
                <HackathonCard
                  props={{
                    img: item.image,
                    status: item.status,
                    title: item.title,
                    startDate: item.startDate,
                    endDate: item.endDate,
                  }}
                ></HackathonCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCatalog;
