import React from 'react';
import Nav from './components/nav.jsx';
import './App.css';

import { Routes, Route } from 'react-router-dom';

// CALVE API: AIzaSyAK6-kZIK18LUT0EerYfx2xfVCK23jNWdE

// RUTAS

import Home from './components/home.jsx';
import Galeria from './paginas/galeria.jsx';
import Ministerios from './paginas/ministerios.jsx';
import Cancionero from './paginas/cancionero.jsx';
import Contacto from './paginas/contacto.jsx';
import AVI from './paginas/avi.jsx';
import ReunionFemenina from './paginas/reu-fem.jsx';
import EspacioVaron from './paginas/ev.jsx';
import JovenesYAdolescentes from './paginas/jov-ados.jsx';
import Domingos from './paginas/domingos.jsx';
import Viernes from './paginas/viernes.jsx';
import Campamento from './paginas/inscripcion-campa.jsx';
import Prueba from './paginas/prueba.jsx';


// SUBIR ACTUALIZACIONES A GITHUB:
// git add . (prepara todos los cambios)
// git commit -m "aca va un comentario de la actualizacion"
// git push (enviar actualizacion a gitHub)


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
		<Route path='/AVI' element={<AVI/>}/>
		<Route path='/ReunionFemenina' element={<ReunionFemenina/>}/>
		<Route path='/EspacioVaron' element={<EspacioVaron/>}/>
		<Route path='/Viernes' element={<Viernes/>}/>
		<Route path='/JovenesYAdolescentes' element={<JovenesYAdolescentes/>}/>
		<Route path='/Domingos' element={<Domingos/>}/>
		<Route path='/Campamento' element={<Campamento/>}/>
		<Route path='/Prueba' element={<Prueba/>}/>
	</Routes>
	</>
  )
}

export default App