import React from "react";
import IMAGES from "../Assets/index";
import CustomImg from "../Components/CustomImg";
import { Link } from "react-router-dom";

export default function Home() {
  const office = "office";
  const resma ="resma";
  const misc = "misc";

  return (
    <>
      <div id="homeConteiner">
      <Link to={`/category/${misc}`} > <h2>Merchandising</h2>
      <CustomImg {...IMAGES.img7}></CustomImg></Link>
          
        
      </div>
      <div id="homeConteiner2">
      <div id="homeConteiner">
      <Link to={`/category/${resma}`} > <h2>Resmas</h2>
      <CustomImg {...IMAGES.img6}></CustomImg></Link>
          
        
      </div>
      <div id="homeConteiner">
      <Link to={`/category/${office}`} > <h2>Art de Oficina</h2>
      <CustomImg {...IMAGES.img8}></CustomImg></Link>
          
        
      </div>
        </div>
    </>
  );
}
