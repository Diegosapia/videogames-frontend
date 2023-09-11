import Landing from './components/LandingPage/landing';
import { Routes,Route, useLocation, } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from '../src/components/Home/home';
import Detail from './components/Details/detail';
 import Create from './components/Create/create';
 import Nav from './components/Nav/nav';
import axios from 'axios';


function App() {
  useEffect(() => {
    // Cambia el título de la página web
    document.title = "VideoGame DS";

    // También puedes utilizar variables de estado de React
    // para cambiar el título dinámicamente
    // Ejemplo: document.title = `Mi Aplicación - ${miVariableDeEstado}`;
  }, []); 
 
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
