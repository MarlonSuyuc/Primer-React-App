import React from "react"
import "./App.css"
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='marvel' />
        {/* <ListOfGifs /> */}
        {/*
         Al momento de pasarle  keyword='marvel' esa keyword es la que dara como respuesta de la busqueda en la API.
         En cambio si no le pasamos la keyword( <ListOfGifs /> )' o sea que solo renderizamos el componente ListOfGifs nos dara como  respuesta la keyword por defecto que esta en getGifs.js que es  apple
        */}
      </section>
    </div>
  );
}
/* 
const users = {
  data: [
    {
      1: 'Marlon'
    },
    {
      2: 'juan'
    }
  ],
  meta: {
    0: 'llllll'
  }
}

const { meta = [] } = users;
const { data = [] } = users;
console.log(users)
console.log(data)
console.log(meta)
*/