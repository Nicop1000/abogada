import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React, { Component } from "react";
import Slider from "react-slick";
import Testimionio from "./Testimionio";

const testimonios = [
  {
    id: "1",
    imag: "./gise3.jpg",
    descriptions: "Una profesional de primer nivel, vine por recomendaciones y me voy muy contenta.",
    nombre: "Priscila Sanabria",
    area: "Derecho Civil",
  },
  
  {
    id: "2",
    imag: "./gise1.jpg",
    descriptions: "Abogada de lujo, fue muy expeditiva, profesional y meticulosa con mi defensa. Muy agradecido.",
    nombre: "Adolfo Chaparro",
    area: "Derecho Laboral",
  },


] ;



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div id="test">
            <div className="grid">
                <h3 className="font-bold text-center text-4xl text-pink-900 mt-20 pt-2">Testimonios</h3>
                <p className="font-semibold text-center p-4 text-pink-600 text-2xl">Palabras inspiradoras de los clientes muy satisfechos.</p>
            </div>
        <Slider {...settings}>
        {testimonios && testimonios.map((testimonio) => (
            <div key={testimonio.id}>
              <Testimionio {...testimonio} />
            </div>
          ))}
       
        
         
        </Slider>
      </div>
    );
  }
}