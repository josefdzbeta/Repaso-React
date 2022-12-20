import {useState} from 'react'
import Header from "./components/Header"
function App() {

  const [cantidad, setCantidad] = useState(10000); //Deestructuring de un array //Segundo valor es la función que modifica el state

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  function handleChange(e) { //Buena práctica en react es añadir la palabra handle al evento que vamos a utilizar
    setCantidad(parseInt(e.target.value)) //Cambiar el valor del state con la función declarada
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className='flex justify-between my-6'>
        <button type='button' className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'>
        -</button>
        <button type='button' className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'>
        +</button>
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
      
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
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
*/