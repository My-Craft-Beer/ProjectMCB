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

// Mbti
import Mbti from "./component/mbti/Mbti";
import Survey1 from "./component/mbti/Survey1";
import Survey2 from "./component/mbti/Survey2";
import Survey3 from "./component/mbti/Survey3";
import Survey4 from "./component/mbti/Survey4";
import Survey5 from "./component/mbti/Survey5";
import Survey6 from "./component/mbti/Survey6";
import ResultHop from "./component/mbti/resultHop";
import ResultBlack from "./component/mbti/resultBlack";
import ResultMalt from "./component/mbti/resultMalt";
import ResultBacteria from "./component/mbti/resultBacteria";

function App() {

  return (
    <div className="App">
      <Router>
        <ModalContainer/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/MacVigation" element={<Map5/>} />
          <Route exact path="/serviceInfo" element={<ServiceInfo/>} />
          <Route path="/mbti" element={<Mbti />}></Route>
          <Route path="/survey1" element={<Survey1 />}></Route>
          <Route path="/survey2" element={<Survey2 />}></Route>
          <Route path="/survey3" element={<Survey3 />}></Route>
          <Route path="/survey4" element={<Survey4 />}></Route>
          <Route path="/survey5" element={<Survey5 />}></Route>
          <Route path="/survey6" element={<Survey6 />}></Route>
          <Route path="/resulthop" element={<ResultHop />}></Route>
          <Route path="/resultblack" element={<ResultBlack />}></Route>
          <Route path="/resultmalt" element={<ResultMalt />}></Route>
          <Route path="/resultbacteria" element={<ResultBacteria />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
