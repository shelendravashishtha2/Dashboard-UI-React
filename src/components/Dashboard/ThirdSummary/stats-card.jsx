let StatsCard = (props) => {
  return (
    <>
      <div className="stats-card">
        <p>{props.data.title}</p>
        <div className="inner-stats-card">
          <div className="rich-text">
            <span className="material-icons-outlined">north_east</span> +
            {props.data.percent}%
          </div>
          <h1>{props.data.count}</h1>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
