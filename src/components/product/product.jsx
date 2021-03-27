import React from "react";
import "./product.css";
import { Link, Router } from "react-router-dom";



const Card = ({ id, title, thumbnail, price, sellerID, sellerNick, redirectHandler }) => {
  return (
    
    //  <Link
    //   to={`./item:${id}`}
    //   className="product"
    //   onClick={redirectHandler}
    // >
    <div className="product">
      <p className="title">{title}</p>
      <img className="img" src={thumbnail} alt="Product" loading="lazy"></img>

      <p className="price">
        {Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(price)}
      </p>
      
      <p className="seller">{sellerID}</p>
      <p className="seller">{sellerNick}</p>
      <a href={"https://api.mercadolibre.com/items/" + id }>Item API</a>
    </div>
    // {/* </Link>  */}
  
);

  
};

export default Card;