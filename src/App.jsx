import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [numero, setNumero] = useState(""); //Cantidad en pantalla
  const [operacion, setOperacion] = useState(0);

  const [cantidadUno, setCantidadUno] = useState("");
  const [cantidadDos, setCantidadDos] = useState("");

  //Actualiza los numeros en pantalla conforme se introducen
  const handleNumber = (num) => {
    setNumero(numero + num);
  };

  const handleDel = () => {
    setNumero(numero.slice(0, -1));
    if (numero.length == 1) {
      setNumero("");
    }
  };

  const handleSuma = () => {
    setOperacion(1);
    setCantidadUno(parseInt(numero));
    setNumero("");
  };

  const handleResta = () => {
    setOperacion(2);
    setCantidadUno(parseInt(numero));
    setNumero("");
  };

  const handleMultiplicacion = () => {
    setOperacion(3);
    setCantidadUno(parseInt(numero));
    setNumero("");
  };

  const handleDivision = () => {
    setOperacion(4);
    setCantidadUno(parseInt(numero));
    setNumero("");
  };

  const clean = () => {
    setOperacion(0);
    setCantidadUno("");
    setCantidadDos("");
    setNumero("");
  };

  useEffect(() => {
    console.log(`c1: ${cantidadUno} c2: ${cantidadDos} op: ${operacion}`);
    if (cantidadDos != "" && cantidadUno != "" && operacion != 0) {
      console.log("access");
      let result = Operaciones(cantidadUno, cantidadDos);
      setNumero(result);
      setTimeout(() => {
        clean();
      }, 5000);
    }
  }, [cantidadDos, cantidadUno]);

  useEffect(() => {
    console.log(`cantidad uno: ${cantidadUno}`);
  }, [cantidadUno]);

  useEffect(() => {
    console.log(`cantidad dos: ${cantidadDos}`);
  }, [cantidadDos]);

  const Operaciones = (canuno, candos) => {
    switch (operacion) {
      case 1: //Suma
        let suma = canuno + candos;
        return suma;
      case 2: //Resta
        let resta = canuno - candos;
        return resta;
      case 3: //Multiplicacion
        let producto = canuno * candos;
        return producto;
      case 4: //División
        let division = canuno / candos;
        return division;
      default:
        return 0;
    }
  };

  const handleResult = () => {
    setCantidadDos(parseInt(numero));
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
          <button onClick={() => handleSuma()}>+</button>
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
          <button onClick={() => handleResta()}>-</button>
          <button onClick={() => handleMultiplicacion()}>*</button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="number"
            id="cero"
            value={0}
          >
            0
          </button>
          <button onClick={() => handleDivision()}>/</button>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
