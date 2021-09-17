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
          <Route path="/Dashboard-UI-React/stats">
            <Statistic />
          </Route>
          <Route path="/Dashboard-UI-React/logout">
            <Logout />
          </Route>
          <Route path="/Dashboard-UI-React/people">
            <People />
          </Route>
          <Route path="/Dashboard-UI-React/schedule">
            <Schedule />
          </Route>
          <Route path="/Dashboard-UI-React/settings">
            <Setting />
          </Route>
          <Route path="/Dashboard-UI-React/business">
            <Business />
          </Route>
          <Route path="/Dashboard-UI-React/chat">
            <Chat />
          </Route>
          <Route path="/Dashboard-UI-React/dir">
            <Dir />
          </Route>
          <Route path="/Dashboard-UI-React/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
