let LineMeter = (props) => {
  return (
    <>
      <div className="line-meter">
        <div style={{color : props.color}}>
          <p>&#9679; </p> {props.name}
        </div>
        <div className="lin-progress-bar">
          <div
            className="filled"
            style={{ width: `${props.width}%`, background: props.color }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LineMeter;
