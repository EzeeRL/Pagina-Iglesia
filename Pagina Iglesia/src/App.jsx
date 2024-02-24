import React from 'react';
import Nav from './components/nav.jsx';
import './App.css';

import { Routes, Route } from 'react-router-dom';

// RUTAS

import Home from './components/home.jsx';
import Galeria from './paginas/galeria.jsx';
import Ministerios from './paginas/ministerios.jsx';
import Cancionero from './paginas/cancionero.jsx';
import Contacto from './paginas/contacto.jsx';



function App() {
  return (
    <>
	 <Nav></Nav>

	 <Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/Cancionero' element={<Cancionero/>}/>
		<Route path='/Ministerios' element={<Ministerios/>}/>
		<Route path='/Galeria' element={<Galeria/>}/>
		<Route path='/Contacto' element={<Contacto/>}/>
	</Routes>
		</>
  )
}

export default App

// SOLUCIONAR ERROR DE QUE CUANDO SE PONE LA VISTA PARA MOBILE Y SE USAN LOS LINKS PARA IR AL 
//CANCIONERO, POR EJEMPLO, Y LUEGO CUANDO SE VUELVE QUEDA EL NAV ABIERTO DEL HOME, E INCLUSO 
//SE DUPLICAN.

//POSIBLE SOLUCIÓN: ¿Recargar la página al volver al home?