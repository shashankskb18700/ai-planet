import "./card.css";

const Card = ({ icon, title, para }) => {
  return (
    <div className="card">
      <div>
        <img src={icon}></img>
        <p>{title}</p>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
