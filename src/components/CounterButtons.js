import "../styles/counter_buttons.css";

function CounterButtons() {
  const subtractClick = () => {};

  const addClick = () => {};

  return (
    <div>
      <button
        className='button counter-button'
        onClick={subtractClick}
      >
        -
      </button>
      <button
        className='button counter-button'
        onClick={addClick}
      >
        +
      </button>
    </div>
  );
}

export default CounterButtons;
