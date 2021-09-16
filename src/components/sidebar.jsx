import { useHistory } from "react-router";
import "../css/sidebar.css";
const Sidebar = () => {
  let history = useHistory();
  let changeSide = (idx, path) => {
    let allLinks = document.querySelectorAll(".sidebar ul li");
    console.log(allLinks);
    for (let i = 0; i < allLinks.length; i++)
      allLinks[i].classList.remove("active");
    allLinks[idx].classList.add("active");
    history.replace(path);
  };

  return (
    <>
      <div className="sidebar">
        <span className="material-icons-outlined logo">wordpress</span>
        <div className="sidebar-icons">
          <ul>
            <li
              className="icon active"
              onClick={() => {
                changeSide(0, "/");
              }}
            >
              <span className="material-icons-outlined">home</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(1, "/stats");
              }}
            >
              <span className="material-icons-outlined">assessment</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(2, "/business");
              }}
            >
              <span className="material-icons-outlined">work_outline</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(3, "/dir");
              }}
            >
              <span className="material-icons">folder</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(4, "/schedule");
              }}
            >
              <span className="material-icons">today</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(5, "/people");
              }}
            >
              <span className="material-icons">group</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(6, "/chat");
              }}
            >
              <span className="material-icons">sms</span>
            </li>
            <li
              className="icon"
              onClick={() => {
                changeSide(7, "/logout");
              }}
            >
              <span className="material-icons">logout</span>
            </li>
          </ul>
        </div>
        <div
          className="settings"
          onClick={() => {
            history.index = 0;
            history.push("/settings");
          }}
        >
          <span className="material-icons">settings</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
