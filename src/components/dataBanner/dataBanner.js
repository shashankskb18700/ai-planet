import "./dataBanner.css";

const DataBanner = ({ svg, count, text }) => {
  return (
    <div className="dataBanner">
      <img src={svg}></img>
      <div>
        <p>{count}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DataBanner;
