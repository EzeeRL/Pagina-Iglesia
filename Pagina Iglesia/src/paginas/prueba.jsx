import axios from "axios";

import './prueba.css';



const Prueba = () => {
const handlePrueba = async ()=>{
	const respuesta = await axios.get("https://icevtl.com:3113/backend")
	.then(response =>{
		console.log(respuesta)
		console.log(response.data)
	})
}
    return (
		<>
<button onClick={handlePrueba} className="button-prueba">prueba -10</button>
</>
    )
}

export default Prueba;
