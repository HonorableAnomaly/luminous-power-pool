// import { useEffect } from "react";
// import { useThunk } from "../hooks/use-thunk";
// import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useFetchCharactersQuery } from "../store";
// import { fetchCharacters } from "../store/thunks/fetchCharacters";
import "../styles/reservoir.css";
import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import PowerBar from "./PowerBar";

function Reservoir({ character }) {
  // const [doFetchCharacters, isLoadingCharacters, loadingCharactersError] = useThunk(fetchCharacters);
  const results = useFetchCharactersQuery(character);

  const { data } = useSelector((state) => {
    return state.characters;
  });

  console.log(data);
  console.log("Data is: " + results);

  // useEffect(() => {
  //   doFetchCharacters();
  // }, [doFetchCharacters]);

  // let content;
  // if (isLoadingCharacters) {
  //   // content = (
  //   //   <Skeleton
  //   //     times={1}
  //   //     className='h-10 w-full'
  //   //   />
  //   // );
  //   content = "Loading Data...";
  // } else if (loadingCharactersError) {
  //   return <div>Error fetching data...</div>;
  // } else {
  //   content =
  //     data.map((character) => {
  //       return (
  //         <Reservoir
  //           key={character.id}
  //           character={character}
  //         />
  //       );
  //     });
  //   console.log(content);
  // }

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
