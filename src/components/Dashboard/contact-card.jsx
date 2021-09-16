let ContactCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="wrapper">
          <div className="profile-pic">
            {props.img ? (
              <img src={props.img} alt="" />
            ) : (
              <span className="material-icons-outlined">account_circle</span>
            )}
          </div>
          <div className="con-details">
            <h4>{props.data.name}</h4>
            <p>
              Applied By <span>{props.data.title}</span>
            </p>
          </div>
        </div>
        <div className="con-card-btn">
          <div className="card-btn">
            <span className="material-icons-round">sms</span>
          </div>
          <div className="card-btn">
            <span className="material-icons-round">call</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
