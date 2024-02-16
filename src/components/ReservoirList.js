import Reservoir from "./Reservoir";

function ReservoirList({ character }) {
  return (
    <>
      <div className='columns'>
        <Reservoir
          // key={character.id}
          character={character}
        />
      </div>
    </>
  );
}

export default ReservoirList;
