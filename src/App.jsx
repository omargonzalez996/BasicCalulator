import { useState } from "react";
import "./App.scss";

function App() {
  const [numero, setNumero] = useState(""); //Cantidad en pantalla
  const [cantidadUno, setCantidadUno] = useState("");
  const [cantidadDos, setCantidadDos] = useState("");
  const [operacion, setOperacion] = useState(0);

  const handleNumber = (num) => {
    setNumero(numero + num);
  };

  const handleDel = () => {
    setNumero(numero.slice(0, -1));
    if (numero.length == 1) {
      setNumero("");
    }
  };

  const handlePLus = () => {
    setOperacion(1);
    setCantidadUno(numero);
    setNumero("");
  };

  const handleResult = () => {
    let canuno = parseInt(cantidadUno);
    let candos = parseInt(cantidadDos);
    let res = 0;
    setNumero("");
    switch (operacion) {
      case 1: //Suma
        res = canuno + candos;
        console.log(res);
        setNumero(res);
        break;
      case 2: //Resta
        res = canuno - candos;
        setNumero(res);
        break;
      case 3: //Multiplicacion
        res = canuno * candos;
        setNumero(res);
        break;
      case 4: //División
        res = canuno / candos;
        setNumero(res);
        break;
      default:
        break;
    }
    setNumero();
  };
  return (
    <div className="App">
      <div id="contenedor-calc">
        <input readOnly value={numero} id="pantalla" type="text" />
        <div id="botonera">
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="uno"
            value={1}
          >
            1
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="dos"
            value={2}
          >
            2
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="tres"
            value={3}
          >
            3
          </button>
          <button onClick={() => handleDel()}>DEL</button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="cuatro"
            value={4}
          >
            4
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="cinco"
            value={5}
          >
            5
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="seis"
            value={6}
          >
            6
          </button>
          <button onClick={() => handlePLus()}>+</button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="siete"
            value={7}
          >
            7
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="ocho"
            value={8}
          >
            8
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="nueve"
            value={9}
          >
            9
          </button>
          <button>-</button>
          <button>.</button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="cero"
            value={0}
          >
            0
          </button>
          <button>/</button>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
