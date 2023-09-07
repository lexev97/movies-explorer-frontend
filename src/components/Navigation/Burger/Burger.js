import { Fragment } from 'react';

const Burger = (props) => {
  return (
    <Fragment>
      <div
        className={`burger opacity08 ${
          props.burgerIsPressed ? 'burger_pressed' : ''
        }`}
        onClick={props.onClick}
      >
        <span
          className={`burger__line ${
            props.burgerIsPressed ? 'burger__line_turn-line1' : ''
          }`}
        ></span>
        <span
          className={`burger__line ${
            props.burgerIsPressed ? 'burger__line_remove-line2' : ''
          }`}
        ></span>
        <span
          className={`burger__line ${
            props.burgerIsPressed ? 'burger__line_turn-line3' : ''
          }`}
        ></span>
      </div>
      <div
        className={`burger-backdrop ${
          props.burgerIsPressed ? 'burger-backdrop_shown' : ''
        }`}
      ></div>
    </Fragment>
  );
};

export default Burger;
