import './ministerios.css';
import Footer from '../components/footer.jsx';
import { Link } from 'react-router-dom';

const Ministerios = () => {
    return (
		<>
        <div className="container">
            <div className="container-info-ministerios">
                <h1 className="titulo-ministerios">Ministerios</h1>
                <p className='texto-informativo-ministerios texto-general'>Acá vas a encontrar nuestras reuniones organizadas en cada día de la semana. <br /> Al hacer clic en ellas podrás ver información más detallada acerca de cada una.</p>
				<p className="txt-mobile">Puede desplazar el cuadro para ver los días completos.</p>
            </div>

            <div className="table-container">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sábado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to='/AVI'>Adicciones vs Vida <br />20:00hs</Link></td>
                                <td><Link to='/reunionFemenina'>Reunión Femenina <br />18:00hs</Link></td>
                                <td><Link to='/AVI'>Adicciones vs Vida <br />20:00hs</Link></td>
                                <td><Link to='/EspacioVaron'>Espacio Varón <br />20:00hs</Link></td>
                                <td><Link to='/Viernes'>Reunión de oración y estudio de la palabra <br />20:00hs</Link></td>
                                <td><Link to='/JovenesYAdolescentes'>Actividad de Jóvenes y Adolescentes <br />19:00hs</Link></td>
                                <td><Link to='/Domingos'>Cena del Señor y Predicación del Evangelio.<br />10:00hs - 13:00hs</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
		
		<Footer></Footer>
</>
    )
}

export default Ministerios;
