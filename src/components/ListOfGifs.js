import React, { useEffect, useState } from "react" //useState y useEffect son un hook
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  /** useState: Devuelve un array de 2 pociciones
   * el la pocion [0] tenemos el valor
   * en la pocicion [1] tenemos el actualizador
   */

  useEffect(
    function () {
      /**
       * useEffect recibe 2 parametros:
       * 1er parametro es la funcion q queremos ejecutar
       * 2do paramwtro son las dependencias que tiene este efecto(variables o informacion q si cambia se tiene q ejecutar este efecto y tiene q ser un array)
       */
      getGifs({ keyword })
        .then(gifs => setGifs(gifs))
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
