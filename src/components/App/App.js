import { DisplayMapFC } from '../DisplayMap/DisplayMap';
// import DisplayMap from '../DisplayMap/DisplayMap';
import Map from '../Map/Map';
import Vector from '../Vector/Vector';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Map />
      <h1>----</h1>
      <Vector />
      <h1>----</h1>
      {/* <DisplayMap /> */}
      <DisplayMapFC />
    </div>
  );
};

export default App;
