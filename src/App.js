import logo from './logo.svg';
import './App.css';
import Galeria from './components/galeria/Galeria';
import { useEffect, useRef, useState } from 'react';
import Transportador from './components/transportador/Transportador';

function App() {

  const img = useRef();
  const [refActualizado, setRefActualizado] = useState(null);
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    if (!!img) {
      setRefActualizado(img.current);
    }
  }, [img]); // solo cuando se actualice la lista de dependencias

  const respuestaEnvio = (child) => setPortal(child)
  const respuestaRegreso = (child) => setPortal(child)

  return (
    <div className="App">
      <header className="App-header">
        <img ref={img} src={logo} className="App-logo" alt="logo" />
        <Galeria />
        {!!portal && portal}
        <Transportador handleEnvio={respuestaEnvio} handleRegreso={respuestaRegreso} paquete={refActualizado} />
      </header>
    </div>
  );
}

export default App;
