import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { url } = useParams();

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-3">

                </div>
                <div className="col-span-6">
                    <div>
                        <img style={{height: "800px", width: "700px"}} src={url.replace(/\|/g, "/")} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;