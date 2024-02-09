import "./styles/reservoir_list.css";

import Nav from "./components/Nav";
import ReservoirList from "./components/ReservoirList";

function App() {
  return (
    <div>
      <Nav />
      <div className='ReservoirList'>
        <ReservoirList />
      </div>
    </div>
  );
}

export default App;
