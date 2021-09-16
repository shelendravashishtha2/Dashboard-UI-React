import "../../css/mainDashboard.css";
import ChartMainDashboard from "./chart-main-dashboard";
import ContactContainer from "./contact-container";

let MainDashboard = () => {
  return (
    <>
      <div className="main-dashboard">
        <ChartMainDashboard />
        <ContactContainer />
      </div>
    </>
  );
};

export default MainDashboard;
