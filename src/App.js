import Nav from "./components/Nav";
import ReservoirList from "./components/ReservoirList";
import "./styles/reservoir_list.css";

function App() {
  return (
    <>
      <Nav />
      <div className='ReservoirList'>
        <ReservoirList />
      </div>
    </>
  );
}

export default App;
