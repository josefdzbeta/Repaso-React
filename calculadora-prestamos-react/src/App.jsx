import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar } from "./helpers/index.js";



function App() {

  const [cantidad, setCantidad] = useState(10000); //Deestructuring de un array //Segundo valor es la función que modifica el state
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(()=>{
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalPagar)

    
  }, [cantidad, meses]) //Escucha los useState de cantidad y meses

  useEffect(() => {
  //Calcular pago mensual
  setPago(total / meses)
  }, [total])//useEffect escucha por total
  
  
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  
  function handleChange(e) { //Buena práctica en react es añadir la palabra handle al evento que vamos a utilizar
    setCantidad(parseInt(e.target.value)) //Cambiar el valor del state con la función declarada
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;
    if (valor<MIN) {
      alert('Cantidad No Válida')
      return;
    }
    setCantidad(valor);
  }
  function handleClickIncremento() {
    const valor = cantidad + STEP;
    if (valor>MAX) {
      alert('Cantidad No Válida')
      return;
    }
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className='flex justify-between my-6'>
       <Button 
          operador='-'
          fn={handleClickDecremento}
        />
       <Button 
          operador='+'
          fn={handleClickIncremento}
       />
      </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select 
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={e => setMeses(parseInt(e.target.value))} //puedes cambiar el valor del useState así, si no tienes validaciones
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de Pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center '>{meses} Meses</p>
        <p className='text-xl text-gray-500 text-center '>{formatearDinero(total)} Total a Pagar</p>
        <p className='text-xl text-gray-500 text-center '>{formatearDinero(pago)} Pagos Mensuales </p>
      </div>


    </div>
  )
}

export default App
/*
JSX - Te permite combinar html y JavaScript. Todas las etiquetas de HTML están disponibles pero no todas las funciones de JS. el código de js se escribe entre {}
Componentes: Los componentes te permiten dividir el código en partes reutilizables. 
Se puede pasar información de un componente a otro con Props. 
State: source of truth - retorna dos valores, state y la función que modifica el state. No se debe modificar directamente, sino utilizar la función que lo modifica. 
En un proyecto grande se debe administrar el state global como Context, Zustand, Recoil o Redux
useEffect es un hook que se ejecuta una vez que el componente está listo y toma un array de dependencias - Se le puede pasar un state para "escuchar" los cambios que ocurren en ese state, en caso de que el state se actualice, el useEffect se ejecuta otra vez. 


*/