const apiKey = "zb1Bq6sxV6YtLorNyzrFzbZru1OZiWJC";

export default function getGifs({ keyword = "apple" } = {}) {
  //{ keyword = "apple" } = {} utilizaremos el objeto vacio por defecto (={}) y si no le pasamos nada a getGifsen en App.js pues sera apple
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      // console.log(response)
      // console.log(data.title)
      /*
       const { data = [] } = response;
       data es la destructuracion de response xq response es un obj que trae dentro data, meta, pagination y para sacar la informacion devemos poner en obj q viene ({}) despues el valor ({data}) y los corchetes ([]) es un valor por defecto por si data vienen undefined 
      */
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          // console.log(image)
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          // Las images tiene varia medidas por eso le asignamos (images.downsized_medium) a url
          return { title, id, url };
        });
        // console.log(gifs); gifs ya nos devuelve los valores que buscamos q son: id, title, url
        return gifs;
      }
    });
}
