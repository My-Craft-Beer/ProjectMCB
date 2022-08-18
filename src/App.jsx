import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home/Home';
// import Map from './component/Map/Map';
// import Map2 from './component/Map/Map2';
// import Map3 from './component/Map/Map3';
// import Map4 from './component/Map/Map4';
import Map5 from './component/Map/Map5';
import ModalContainer from './component/ModalMenu/Modalcontainer';
import ServiceInfo from './component/ServiceInfo/ServiceInfo';
import Mbti from './component/mbti/Mbti'

function App() {

  return (
    <div className="App">
      <Router>
        <ModalContainer/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/MacVigation" element={<Map5/>} />
          <Route exact path="/serviceInfo" element={<ServiceInfo/>} />
          <Route exact path="/mbti" element={<Mbti/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
