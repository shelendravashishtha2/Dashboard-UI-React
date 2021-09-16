import "../../css/chart-main-dashboard.css";
import ChartCard from "./chart-card";
import SLine from "./secondChart/sLine";
import StatsComp from "./ThirdSummary/stats";
let ChartMainDashboard = () => {
  return (
    <>
      <div className="chart-main-container">
        <ChartCard />
        <SLine />
        <StatsComp />
      </div>
    </>
  );
};

export default ChartMainDashboard;
