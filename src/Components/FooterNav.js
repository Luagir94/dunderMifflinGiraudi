import React from "react";
import IMAGES from "../Assets/index";
import CustomImg from "./CustomImg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div>
            <p>
                Holis
            </p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/products`}>Productos</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
            <ul>
                <li><a href="https://github.com/Luagir94"><CustomImg {...IMAGES.img5}/></a></li>
                <li><a href="https://twitter.com/luagirdev"><CustomImg {...IMAGES.img4}/></a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
