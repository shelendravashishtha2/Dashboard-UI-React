import "./css/button.css";
let Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn-primary ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
