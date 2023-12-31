import "./NewRelease.css";
import { Slides } from "../Data/Collection";
import React from "react";


function NewRelease({ image, name, price }) {
    return (
        <div className="catogery">
            <div className="container">
                <a href="index.html"><img className="Image" src={image} alt="Category 1 Images" /> </a>
                {/* <button className="cart_btn">Add to Cart</button> */}

            </div>
            <div className="details">
                <h4>{name}</h4>
                <p>Rs.{price}.00</p>
            </div>

        </div>
    )
}

export default NewRelease