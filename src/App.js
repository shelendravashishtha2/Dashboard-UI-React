import "./App.css";
import Dashboard from "./components/Dashboard/dashboard";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dir from "./components/Dir/Dir";
import Statistic from "./components/Statistic/Statistic";
import Logout from "./components/Logout/Logout";
import People from "./components/People/People";
import Schedule from "./components/Schedule/Schedule";
import Setting from "./components/Setting/Setting";
import Business from "./components/Business/Business";
import Chat from "./components/Chat/Chat";

let App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/stats">
            <Statistic />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/settings">
            <Setting />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/dir">
            <Dir />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
