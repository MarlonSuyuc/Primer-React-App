import React from "react"
import "./App.css"
import ListOfGifs from "./components/ListOfGifs";
import {Link, Route } from "wouter";
// Route: sirbe para que una forma declarativa decir que rutas tiene la aplicacion 
// Link: sirbe par hacer enlaces q funcionen por el history.push osea q use el history del navegador sin refrescar la pagina: Actualizara el enlace el wouter, el ruter de wouter y cambiara el componente q tenga q renderizar y lo ara sin refrescar la pagina
export default function App() {
  return (
    <div className="App">
      <section className="App-content">
      <Link to="/gif/colombia">colombia</Link>
      <Link to="/gif/mexico">mexico</Link>
      <Link to="/gif/canada">canada</Link>

        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />

        {/* <ListOfGifs keyword='marvel' /> */}
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