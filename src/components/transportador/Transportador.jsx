import { createPortal } from "react-dom";
import { v4 as uuidv4 } from 'uuid';

function Transportador(props) {

  const handleEnvio = () => {
    const newParent = document.querySelector("#nuevoEspacio");
    console.log(newParent);
    console.log(props.paquete);
    props.handleEnvio(createPortal(props.paquete, newParent, uuidv4()));
  }
  const handleRegreso = () => {
    const newParent = document.querySelectorAll(".App-header")[0];
    console.log(newParent);
    console.log(props.paquete);
    props.handleRegreso(createPortal(props.paquete, newParent, uuidv4()));
  }

  return (
    <>
      <button onClick={handleEnvio}>Envialo</button>
      <button onClick={handleRegreso}>Regresalo</button>
    </>
  )
}

export default Transportador