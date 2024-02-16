import "../styles/new_reservoir.css";
import Reservoir from "./Reservoir";
import ReservoirList from "./ReservoirList";

function NewReservoir({ character }) {
  const addNewReservoir = () => {
    console.log(<Reservoir />);
    ReservoirList.push(<Reservoir />);
  };

  return (
    <div>
      <button
        className='button add-new'
        onClick={addNewReservoir}
      >
        Add New Reservoir
      </button>
    </div>
  );
}

export default NewReservoir;
