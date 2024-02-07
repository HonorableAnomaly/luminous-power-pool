import Nav from "./components/Nav";
import NewReservoir from "./components/NewReservoir";
import ReservoirList from "./components/ReservoirList";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <ReservoirList />
        <NewReservoir />
      </div>
    </div>
  );
}

export default App;
