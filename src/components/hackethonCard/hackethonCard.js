import "./hackethonCard.css";
import Accept from "../../assets/icons/icons8-accept (1).svg";

const HackathonCard = ({ props }) => {
  console.log(typeof props.startDate);

  let startDate = new Date(props.startDate).toDateString();
  let endDate = new Date(props.endDate).toDateString;

  return (
    <div className="hackathonCard">
      <img src={props.img}></img>
      <p>{props.status}</p>
      <p>{props.title}</p>
      <p className="date">
        {props.status == "active" ? (
          <div>
            <p>Starts on</p>
            <p>{startDate}</p>
          </div>
        ) : (
          <div>
            <p>Ends on</p>
            <p>{endDate}</p>
          </div>
        )}
      </p>
      <div className="accept">
        <img src={Accept}></img> Participate now
      </div>
    </div>
  );
};

export default HackathonCard;
