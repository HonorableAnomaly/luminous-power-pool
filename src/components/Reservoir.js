import Character from "./Character";
import Counter from "./Counter";
import PowerBar from "./PowerBar";

function Reservoir() {
  return (
    <div>
      <div className='columns'>
        <div className='column is-one-fifth'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-4by3'>
                <PowerBar />
              </figure>
            </div>
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
                  <p class='title is-4'>{Character.name}</p>
                  <p class='subtitle is-6'>{Character.tribe}</p>
                  <Counter />
                </div>
              </div>

              <div class='content'>
                {Character.bio}
                <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservoir;
