import axios from "axios";

import './prueba.css';



const Prueba = () => {
const handlePrueba = ()=>{
	axios.get("https://icevtl.com:3113/status")
	.then(response =>{
		console.log(response.data)
	})
}
    return (
		<>
<button onClick={handlePrueba} className="button-prueba">prueba</button>
</>
    )
}

export default Prueba;
