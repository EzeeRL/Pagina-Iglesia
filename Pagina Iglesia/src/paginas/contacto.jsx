import './contacto.css';
import Footer from '../components/footer.jsx';

function Contacto() {
    return (
        <>
            <div className="container-contacto">
                <h1 className="titulo-contacto">Contacto</h1>
                <p className='txt-ubi'>Nos ubicamos en la calle Vicente López 2113, Sarandí.</p>
                <div className="container-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1708718562628!5m2!1ses!2sar!6m8!1m7!1sTJqX5QQXjv_3I1FFrdlYVQ!2m2!1d-34.66927629370714!2d-58.34771169505758!3f247.95233143999894!4f12.885079741660363!5f0.7820865974627469" className='mapa'></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.552102751343!2d-58.34890559794034!3d-34.669131113851826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33371e5a6a455%3A0x191540cece4dc22!2sIglesia%20Cristiana%20Evangelica!5e0!3m2!1ses!2sar!4v1710434434486!5m2!1ses!2sar" className='mapa'></iframe>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Contacto;
