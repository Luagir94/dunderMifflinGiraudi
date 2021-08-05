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
                Luciano Giraudi - 2021
            </p>
        </div>
        <div>
          <ul id='footerNavigation'>
            <li>
              <Link to="/dunderMifflinGiraudi">Home</Link>
            </li>
            <li>
              <Link to={`/products`}>Productos</Link>
            </li>
          </ul>
        </div>
        <div>
            <ul>
                <li><a href="https://github.com/Luagir94"><CustomImg {...IMAGES.img5}/></a></li>
                <li><a href="https://www.linkedin.com/in/lucianogiraudi/"><CustomImg {...IMAGES.img9}/></a></li>
                <li><a href="https://twitter.com/luagirdev"><CustomImg {...IMAGES.img4}/></a></li>
                
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
