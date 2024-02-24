import { useState } from 'react';
import './cancionero.css';
import Footer from '../components/footer.jsx';
// import Coros from './canciones.js';

const Cancionero = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const canciones = [
		"A Dios sea la gloria",
		"A quien iré en necesidad?",
		"A ti la gloria!",
		"A Ti, el alfa y la omega, el principio y el fin",
		"A tus pies",
		"Abre mis ojos, oh Cristo",
		"Abre mis ojos, quiero ver a Cristo",
		"Adoramos por siempre al Creador",
		"Al Cordero de Dios sea la gloria",
		"Al Cordero que murió",
		"Al entrar a tu santo lugar",
		"Al estar en la presencia de tu divinidad",
		"Al Señor Jesús loemos",
		"Al único que es digno de recibir",
		"Alabado sea tu nombre",
		"Alabanzas, alabanzas sean",
		"Aleluya el Señor está aquí",
		"Aleluya, aleluya nuestro Dios Poderoso es Rey",
		"Amado Jesucristo",
		"Aquel que la buena obra empezó",
		"Aquí estás Te vemos mover",
		"Aqui estoy rendido por tu majestad",
		"Atráeme a Ti, no me dejes ir",
		"Aún antes de hablar, tu voz podía oír",
		"Bendeciré a Jehová en todo tiempo",
		"Brillemos en un mundo que vive sin luz.",
		"Bueno es alabar oh Señor, tu nombre",
		"Bueno es alabarte, oh Jehová",
		"Buscas caminos sin saber",
		"Cada cosa en la vida, tiene su justo lugar",
		"Cada día con Cristo me llena de perfecta paz",
		"Cada mañana al despertar",
		"Celebrad a Cristo celebrad",
		"Cerca de Ti yo quiero estar",
		"Con humildad y sencillez",
		"Con mis labios y mi vida te alabo Señor, te alabo",
		"Con toda gloria y toda majestad",
		"Con todo mi ser te quiero exaltar",
		"Con voz de mando y trompeta de Dios",
		"Confío en Ti, confío en Ti.",
		"Conozco que todo lo puedes, que mi pensamiento no",
		"Consagrarme todo entero.",
		"Creo en Dios, Él está dentro de mí",
		"Cristo en su amor me guía, andando cada día muy ce",
		"Cristo es la peña de Oreb",
		"Cristo te exalto, Cristo te adoro",
		"Cristo, salvador de nuestra vida",
		"Crucificado por mí fué Jesús",
		"Cuan bello es el Señor, cuan hermoso es el Señor.",
		"Cuán glorioso es el cambio operado en mi ser",
		"Cuando Cristo vino a mi corazón, mi vida entera cambió",
		"Cuando la trompeta del Señor se toque la final",
		"Cuando nadie me ve, en la intimidad",
		"Cuando pienso en tu amor tan bello y te veo a Ti e",
		"Cuando te alabo arde en mí el fuego de tu Espíritu",
		"Cuando veo tu amor, cuando escucho tu verdad",
		"Dad gracias de corazón, dad gracias al Santo Dios",
		"Damos honor a Ti",
		"De gloria en gloria te veo",
		"De tal manera me amó, que su vida no escatimó",
		"Desde el fondo del mar",
		"Desolados ya no más",
		"Digno eres de gloria y alabanza",
		"Digno es el Cordero Santo",
		"Dios está aquí",
		"Dios me abro a Ti",
		"Dulce refugio en la tormenta",
		"El brillo de este mundo se opaca ante Ti",
		"El Cordero que sufrió (Aquella cruz)",
		"El Dios que hizo los cielos y la tierra",
		"Él es la voz que mis oídos abrió",
		"Él es mi rey ¡Oh cuánto yo le amo!",
		"El mundo busqué y no pudo llenarme",
		"El resplandor del Rey vestido en majestad",
		"El Señor ha sido tan bueno que quiero alabar su nombre",
		"Él viene con poder (El cordero y el león)",
		"En Él encuentro plena paz",
		"En el monte Calvario estaba una cruz (Himnario: 466)",
		"En este día feliz, en este santo lugar",
		"En la oscuridad En la tempestad (ruinas gloriosas)",
		"En presencia estar de Cristo (Himnario: 168)",
		"En Ti confía mi corazón, en Ti reposa mi alma",
		"Enséñame tus caminos Señor (Salmos 86:1)",
		"Entra en la presencia de Señor con gratitud y adórale de corazón",
		"Eres alabado, eres exaltado (Dios imparable)",
		"Eres Santo, Poderoso (príncipe de paz)",
		"Eres Tú, la única razón de mi adoración",
		"Es más que una canción",
		"Es por Ti, que juntos hoy estamos aquí",
		"Es su forma de mirar (Fidelidad)",
		"Es tu fidelidad tan grande, oh Padre (Himnario: 470)",
		"Esta aquí, nos gozamos porque Dios está aquí.",
		"Estamos reunidos aquí Señor",
		"Este es mi deseo, honrarte a Ti.",
		"Este pueblo que has formado hoy viene a entregar",
		"Fija tus ojos en Cristo",
		"Fue tan bello, fue amor",
		"Gracias Padre por ser mi pastor",
		"Gracias Padre por ser mi pastor",
		"Gracias por la cruz, Dios",
		"Hay momentos que las palabras no alcanzan",
		"Hay momentos que no deberían terminar",
		"Hay perdón por la sangre de Jesús",
		"Hay un deseo en mi corazón de estar donde Tú estás",
		"Hay una gran promesa",
		"Hoy estoy alegre porque Tú me amas",
		"Hoy proclamamos a Cristo que resucitó",
		"Humilde vengo a Ti",
		"Incomparable, inigualable es tu amor",
		"Jamás podré entender tu gran amor",
		"Jesucristo es el motivo de mi canción",
		"Jesús, amado de mi alma",
		"Jesús, cuánto me amó",
		"Jesús, Señor de la creación",
		"Juntos Hoy cantamos (Por su gracia)",
		"Juntos sintiendo lo mismo",
		"Justificados pues por la fe",
		"La alegría está en el corazón",
		"La Luna entristeció El Sol se apagó",
		"La sangre de Jesús me redimió (Por mi murió)",
		"La sangre que en la cruz vertió",
		"La única razón de mi adoración",
		"Las cadenas de la muerte me quitó",
		"Majestad, gloria a su Majestad",
		"Maravilloso Dios, Tú permaneces siempre fiel",
		"Mas el Dios de toda gracia",
		"Me gusta estar en tu casa",
		"Me hace bien cada vez que me encuentro y canto",
		"Me has tomado en tus brazos",
		"Me hirió el pecado, fui a Jesús (Himno 416)",
		"Mejor es un día en la casa de Dios",
		"Mi alma se saciará",
		"Mi anhelo, es buscar de día y noche",
		"Mi creación es alabanza",
		"Mi Cristo, mi Rey",
		"Mi Dios y Padre eterno Autor de la creación (El Credo)",
		"Mi pensamiento eres Tú, Señor",
		"Mi primer amor eres Tú Jesús",
		"Mi vergüenza me sepultó (Glorioso día)",
		"Mil veces te fallé, más tú fuiste fiel",
		"Mira Señor Jesús",
		"Muéstrame tus caminos oh Señor",
		"Muy poco falta ya",
		"Nadie como Tu",
		"No existe bien para mí que esté fuera de ti",
		"No existen más motivos, Señor"
	  ];

	  const paginacion = 30;
	  const cuenta1 = currentPage * paginacion;
	  const cuenta2 = cuenta1 - paginacion;
	  const resultado = canciones.slice(cuenta2, cuenta1);

	  const prev = () => {
		setCurrentPage((prevPage) => prevPage -1)
	  }

	  const next = () => {
		setCurrentPage((prevPage) => prevPage +1)
	  }

	return (
		<div className='container-cancionero'>
			<h1 className="titulo-cancionero">Cancionero</h1>
			
			<div className="container-buscador">
				<input type="text" className='buscador' placeholder='Buscar canción...'/>
				<i className="fa-solid fa-magnifying-glass icono-buscador"></i>
				<select name="" id="filtro">
					<option value="Todos" className='options'>Todos</option>
					<option value="Coros" className='options'>Coros</option>
					<option value="Himnos" className='options'>Himnos</option>
				</select>
			</div>
			
			<div className="container-titulo-indice">
				<h2 className='titulo-indice'><b className='txt-indice'>Indice de Canciones</b></h2>
			</div>
		    
			<div className="container-indice-canciones">
				{resultado.map((canciones,index)=> (
				<div className="container-indice">
					<a href="" key={index} className='link-canciones'>{canciones}</a>
				</div>	
				))}
			</div>
			
			<div className="container-buttons-paginacion">
				<p>Siguiente página</p>
				<button onClick={prev} disabled={currentPage === 1} className='buttons-paginacion'><i className='fa-solid fa-chevron-left'></i></button>
				<button onClick={next} disabled={cuenta1 >= canciones.length} className='buttons-paginacion'><i className='fa-solid fa-chevron-right'></i></button>
				<p>Página anterior</p>
			</div>

			
			<Footer></Footer>
		</div>
	)
}

export default Cancionero;

// EL "ICONO-BUSCADOR" TIENE QUE FUNCIONAR PARA BUCAR LAS CANCIONES.
// CUANDO SE BUSQUE UNA CANCION SI ESTA NO SE ENCUENTRA SE DEBE MOSTRAR UN CARTEL DE "CANCION NO ENCONTRADA".