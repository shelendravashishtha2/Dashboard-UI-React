import "react-circular-progressbar/dist/styles.css";
import "../../css/chart-card.css";
import UpperChart from "./upperChart";

let ChartCard = () => {
  return (
    <>
      <div className="chart-card">
        <UpperChart
          data={{
            color: "#8F73DF",
            number: "7956",
            percentage: "70",
            hike: "3.59",
            hikeType: "+",
            icon: "north_east",
          }}
        />
        <UpperChart
          data={{
            className: "active",
            color: "white",
            number: "4658",
            percentage: "60",
            hike: "3.59",
            hikeType: "+",
            icon: "north_east",
          }}
        />
        <UpperChart
          data={{
            color: "#FF5858",
            number: "1501",
            percentage: "40",
            hike: "0.4",
            hikeType: "-",
            icon: "south_east",
          }}
        />
      </div>
    </>
  );
};

export default ChartCard;
