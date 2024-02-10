import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import PowerBar from "./PowerBar";

function Reservoir({ character }) {
  return (
    <>
      <div className='column is-one-fifth'>
        <div className='card'>
          {character.name}
          {character.tribe}
          <PowerBar
            key={character.id}
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
                <p className='title is-4'>{character.rank}</p>
                <p className='subtitle is-6'>
                  <Counter
                    key={character.id}
                    character={character}
                  />
                </p>
                <p className='subtitle is-6'></p>
                <CounterButtons
                  key={character.id}
                  character={character}
                />
              </div>
            </div>

            <div className='content'>
              {character.bio}
              <br />
              <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservoir;
