// Button.js
const Button = (props) => (
  <button 
    className="c-button"
    onClick={props.onClick}>
    {props.children}
  </button>
);