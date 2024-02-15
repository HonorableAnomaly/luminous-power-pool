import { characters } from "../db.json";
import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import PowerBar from "./PowerBar";

function Reservoir({ character }) {
  const data = { characters };
  console.log(data);
  const idsArray = JSON.parse(data);
  console.log(idsArray);

  return (
    <>
      <div className='column is-one-fifth'>
        <div className='card'>
          <PowerBar
            // key={characters.id}
            character={character}
          />
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <figure className='image is-8by8'>
                  <img
                    src='https://bulma.io/images/placeholders/96x96.png'
                    alt='Tribe Symbol'
                  />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-4'>Laithe Khalendros</p>
                {/* {characters.name} */}
                <p className='subtitle is-6'>The Frostfloe</p>
                {/* {characters.tribe} */}
                {/* <p className='title is-4'>{characters.rank}</p> */}
                <p className='subtitle is-6'>Bio</p>
                {/* {characters.bio} */}
              </div>
            </div>

            <div className='content'>
              <Counter
                // key={characters.id}
                character={character}
              />
              <CounterButtons
                // key={characters.id}
                character={character}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservoir;
