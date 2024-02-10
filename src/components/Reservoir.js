import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import PowerBar from "./PowerBar";

function Reservoir({ character }) {
  return (
    <>
      <div className='column is-one-fifth'>
        <div class='card'>
          {character.name}
          {character.tribe}
          <PowerBar
            key={character.id}
            character={character}
          />
          <div class='card-content'>
            <div class='media'>
              <div class='media-left'>
                <figure class='image is-8by8'>
                  <img
                    src='https://bulma.io/images/placeholders/96x96.png'
                    alt='Tribe Symbol'
                  />
                </figure>
              </div>
              <div class='media-content'>
                <p class='title is-4'>{character.rank}</p>
                <p class='subtitle is-6'>
                  <Counter />
                </p>
                <p class='subtitle is-6'></p>
                <CounterButtons />
              </div>
            </div>

            <div class='content'>
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
