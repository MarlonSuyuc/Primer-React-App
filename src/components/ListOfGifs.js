import React, { useEffect, useState } from "react" //useState y useEffect son un hook
import Gif from "./Gif";
import getGifs from "../services/getGifs";

// export default function ListOfGifs({ keyword }) {
export default function ListOfGifs({params}) {
  const { keyword } = params
  // export default function ListOfGifs(props) {
  //   console.log(props)
  //   // dentro de props esta params
  //   const keyword = ''

  const [gifs, setGifs] = useState([]);
  /** useState: Devuelve un array de 2 pociciones
   * el la pocion [0] tenemos el valor
   * en la pocicion [1] tenemos el actualizarValor
   * Las llaves es el valor inicial de gifs
   */

  useEffect(
    function () {
      /**
       * se ejecuta cada vez que se renderice el componente
       * useEffect recibe 2 parametros:
       * 1er parametro es la funcion q queremos ejecutar
       * 2do parametro son las dependencias que tiene este efecto(variables o informacion q si cambia se tiene q ejecutar este efecto y tiene q ser un array)
       */
      getGifs({ keyword })
        .then(gifs => setGifs(gifs))
      // getGifs({ keyword })
      //   .then(gifs => setGifs(gifs)) llamamos a getGifs q trae una prop que es keyword y un vez que tengamos los gifs lo que ariamos es actulizar el state(estado) que el estado comienza en un array vacio en ( const [gifs, setGifs] = useState([]);)y que despues tendra es todos los gifs
    },
    [keyword]
  );
  
  return gifs.map(({ id, title, url }) =>
    <Gif
      id={id}
      key={id}
      title={title}
      url={url}
    />
  )
}
