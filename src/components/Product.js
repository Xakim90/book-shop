import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    return (
        <div className="h-screen">
           Salom {id}
        </div>
    )
}

export default Product;