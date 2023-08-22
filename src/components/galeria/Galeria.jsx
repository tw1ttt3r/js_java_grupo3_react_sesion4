import { Fragment, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Galeria.module.css'
import Nombres from '../../data/nombres';
import InputCustom from '../input/Input';

function Galeria() {

  const nuevoNombre = useRef(null);
  const apellido1Nombre = useRef(null);
  const apellido2Nombre = useRef(null);

  const [nombreEstado, setNombreEstado] = useState([...Nombres]); 

  const handleClick = () => {
    const nuevoRegistro = {
      nombre: nuevoNombre.current.value,
      apellido1: apellido1Nombre.current.value,
      apellido2: apellido2Nombre.current.value
    };
    setNombreEstado(prevState => [...prevState, nuevoRegistro]);
    // setNombreEstado([...nombreEstado, nuevoRegistro]);
    nuevoNombre.current.value = "";
    apellido1Nombre.current.value = "";
    apellido2Nombre.current.value = "";
  } 

  return (
    <>
      <div className={styles.container}>
        {/**habra botones */}
        <InputCustom ref={nuevoNombre} label="Nombre"/>
        <InputCustom ref={apellido1Nombre} label="Apellido 1"/>
        <InputCustom ref={apellido2Nombre} label="Apellido 2"/>
        <button onClick={handleClick}>Agregar</button>
      </div>
      <section>
        {/*habra contenido*/}
        {
          nombreEstado.map((curr) => <Fragment key={uuidv4()}>
            <p>{curr.nombre}</p>
            <p>{curr.apellido1}</p>
            <p>{curr.apellido2}</p>
          </Fragment>)
        }
      </section>
    </>
  )
}

export default Galeria