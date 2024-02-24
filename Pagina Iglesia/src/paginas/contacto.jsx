import './contacto.css';
import Footer from '../components/footer.jsx';

function Contacto() {
	return (
		<>
		<h1 className="titulo-contacto">Contacto</h1>

		<p className='txt-ubi'>Nos ubicamos en la calle Vicente López 2113, Sarandí.</p>
		<div className="container-map">
			<iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1708718562628!5m2!1ses!2sar!6m8!1m7!1sTJqX5QQXjv_3I1FFrdlYVQ!2m2!1d-34.66927629370714!2d-58.34771169505758!3f247.95233143999894!4f12.885079741660363!5f0.7820865974627469" className='mapa'></iframe>
		</div>
		
		<Footer></Footer>
		</>
	)
}


export default Contacto;