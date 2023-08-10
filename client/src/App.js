import Landing from './components/LandingPage/landing';
import { Routes,Route, useLocation} from 'react-router-dom';
import Home from '../src/components/Home/home';
import Detail from './components/Details/detail';
 import Create from './components/Create/create';
 import Nav from './components/Nav/nav';
import axios from 'axios';
axios.defaults.baseURL = "https://www.videogames-backend-production.up.railway.app/";

function App() {

  const {pathname} = useLocation()



  return (
    <div>
      <div>
        {pathname !== '/' && <Nav />}
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>} />
         <Route path='create' element={<Create/>} /> 
       
      </Routes>
    </div>
  );
}


export default App;
