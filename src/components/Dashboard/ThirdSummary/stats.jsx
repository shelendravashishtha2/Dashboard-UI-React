import { ResponsiveContainer } from "recharts";
import "../../../css/ThirdSummary/stats.css";
import Button from "../../../utils/button";
import PieChartComp from "./pieChart";
import StatsCard from "./stats-card";

let StatsComp = () => {
  return (
    <>
      <div className="third-sline">
        <div className="chart-container">
          <div className="stats-intro">
            <h4>Refresh and Campaign Stats</h4>
            <div className="right">
              <div className="transform-icon">
                <span className="material-icons-outlined">send</span>
              </div>
              <div className="in-content">
                40 Campaigns sent in total
                <span>4 Campaigns in last month</span>
              </div>
            </div>
          </div>
          <div className="stats-card-container">
            <StatsCard
              data={{
                title: "User's Reached",
                percent: "3.59",
                count: "7956",
              }}
            />
            <div className="vert-sepr"></div>
            <StatsCard
              data={{
                title: "Referrals",
                percent: "9.01",
                count: "0662",
              }}
            />
            <div className="vert-sepr"></div>
            <StatsCard
              data={{
                title: "Share",
                percent: "39.18",
                count: "1478",
              }}
            />
            <div className="vert-sepr"></div>
            <StatsCard
              data={{
                title: "Application",
                percent: "12.00",
                count: "0564",
              }}
            />
          </div>
          <div className="btn-container">
            <Button text="Start a new Campaign now" className="active" />
            <Button text="Pause all running Campaign" className="inactive" />
          </div>
        </div>
        <div className="label-container">
          <h5>Open Positions by Department</h5>
          <ResponsiveContainer className="res-pie">
            <PieChartComp />
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default StatsComp;
