import Button from "../../utils/button";

let DashboardIntro = () => {
  return (
    <>
      <div className="dashboard-intro">
        <div className="l-intro">
          <h3>Dashboard</h3>
          <h5>
            Monday,<span> 02 July 2020</span>
          </h5>
        </div>
        <div className="r-intro">
          <div className="fline">
            <span className="material-icons-outlined">notifications</span>
            <b>John Bayer</b>
            <div className="profile-pic">
              <img
                src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"
                alt="none"
              />
            </div>
          </div>
          <div className="sline">
            <Button text="+ Add" />
            <div className="input-container">
              <span className="material-icons-outlined">search</span>
              <input type="text" placeholder="search for application here" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardIntro;
