import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchCharacters } from "../store";
import Reservoir from "./Reservoir";
import Skeleton from "./Skeleton";

function ReservoirList({ character }) {
  const [doFetchCharacters, isLoadingCharacters, loadingCharactersError] = useThunk(fetchCharacters);

  const { data } = useSelector((state) => {
    return state.characters;
  });

  useEffect(() => {
    doFetchCharacters();
  }, [doFetchCharacters]);

  let content;
  if (isLoadingCharacters) {
    content = (
      <Skeleton
        times={1}
        className='h-10 w-full'
      />
    );
  } else if (loadingCharactersError) {
    return <div>Error fetching data...</div>;
  } else {
    content = data.map((character) => {
      return (
        <Reservoir
          key={character.id}
          character={character}
        />
      );
    });
  }

  return (
    <>
      <div className='columns'>
        {/* <Reservoir
          key={character.id}
          character={character}
        /> */}
        {content}
      </div>
    </>
  );
}

export default ReservoirList;
