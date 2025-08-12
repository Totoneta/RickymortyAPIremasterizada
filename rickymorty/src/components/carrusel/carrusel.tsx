import { useState, type MouseEvent } from "react";
import "./carrusel.css";

// El movimiento del carrusel se maneja con un estado que su variable funciona como índice 
function Carrusel() {
  const [carruselindex, setCarruselIndex] = useState<number>(0);

  //Para cambiar imgs, solo cambiar el nombre de las mismas y colocarlas en public
  const imgs: string[] = ["rickymortyportal.webp", "rickpaisajenocturno.webp", "rickymortyespacio.jpg", "rickpaisajenocturno.webp"];
  const length = imgs.length;

  //Movimiento de carrusel derecha e izquierda
  const HandleCarruselLeft = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setCarruselIndex((previndex) =>
      previndex === 0 ? length - 1 : previndex - 1
    );
  };
  const HandleCarruselRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCarruselIndex((previndex) =>
      previndex === length - 1 ? 0 : previndex + 1
    );
  };

  return (
    <div className="carruselcontainer">
      <button onClick={HandleCarruselLeft}>
        <i className="bxr  bx-arrow-big-left flecha-izq"></i>
      </button>
      <section className="carrusel">
        <ul
          className="carrusellist"
          style={{ transform: `translateX(-${carruselindex * 25}%)` }}
        >
          {imgs.map((element, i) => {
            return (
              <li key={i}>
                <img src={element} alt={element} />
              </li>
            );
          })}
        </ul>
      </section>
      <button onClick={HandleCarruselRight}>
        <i className="bxr  bx-arrow-big-right flecha-der"></i>
      </button>
    </div>
  );
}

export default Carrusel;
