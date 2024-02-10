import "../styles/counter.css";
import Character from "./Character";

function Counter(character) {
  let power = Character.power;

  return <div className='counter'>{power}</div>;
}

export default Counter;
