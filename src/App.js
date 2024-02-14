import Nav from "./components/Nav";
import ReservoirList from "./components/ReservoirList";
import "./styles/app.css";

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
