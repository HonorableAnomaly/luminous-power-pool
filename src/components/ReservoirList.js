import NewReservoir from "./NewReservoir";
import Reservoir from "./Reservoir";

function ReservoirList() {
  return (
    <>
      <div className='columns'>
        <Reservoir />
        <NewReservoir />
      </div>
    </>
  );
}

export default ReservoirList;
