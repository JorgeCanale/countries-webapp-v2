import {Routes , Route} from "react-router-dom"

import {Home} from "./components/pages/home/Home"
import { LandingPage } from './components/pages/Landing/Landing';
import { ActivityForm } from "./components/form/Form";
import { Detail } from "./components/countryDetail/Detail";
import './App.scss';



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/newActivity" element={<ActivityForm />}/>
      <Route path="/detail/:country" element={<Detail />}/>
    </Routes>
  );
}

export default App;
