import "../../css/dashboard.css";
import DashboardIntro from "./dashboard-intro";
import MainDashboard from "./mainDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <DashboardIntro />
        <MainDashboard />
      </div>
    </>
  );
};

export default Dashboard;
