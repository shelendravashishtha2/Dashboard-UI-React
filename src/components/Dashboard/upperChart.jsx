import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "../../css/upperChart.css";

let UpperChart = (props) => {
  return (
    <>
      <div className={`upper-chart ${props.data.className}`}>
        <div className="fline">
          <b>Total Applications</b>
          <span className="material-icons-outlined">more_horiz</span>
        </div>
        <div className="sline">
          <div className="lcontent">
            <h1>{props.data.number}</h1>
            <p style={{ color: props.data.color }}>
              <span className="material-icons-outlined">{props.data.icon}</span>
              {`${props.data.hikeType+""+props.data.hike}%`}
            </p>
          </div>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: props.data.color,
              textColor: props.data.color,
              trailColor: "#414645",
            })}
            value={props.data.percentage}
            text={`${props.data.percentage}%`}
          />
        </div>
      </div>
    </>
  );
};

export default UpperChart;
