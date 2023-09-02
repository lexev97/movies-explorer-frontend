import { Fragment } from 'react';

const Burger = (props) => {
  return (
    <Fragment>
      <div
        class={`burger opacity08 ${
          props.burgerIsPressed ? 'burger_pressed' : ''
        }`}
        onClick={props.onClick}
      >
        <span
          class={`burger__line ${
            props.burgerIsPressed ? 'burger__line_turn-line1' : ''
          }`}
        ></span>
        <span
          class={`burger__line ${
            props.burgerIsPressed ? 'burger__line_remove-line2' : ''
          }`}
        ></span>
        <span
          class={`burger__line ${
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
