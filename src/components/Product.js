import React from "react";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const Product = () => {

    const { url, title } = useParams();
    const [count, setCount] = useState(0);
    return (
        <div className="w-full">
            <div className="grid grid-cols-8">
                <div className="col-span-2 text-left pl-2 pr-2">
                    {/* <i className="font-bolder text-2xl">{title}</i> */}
                    <div>
                        <i className="font-bold text-2xl">COSMIC MUSIC HANDBOOK BY DARRELL DEVORE</i>
                    </div>
                    <div className="text-xl font-bolder mt-2">€171.13 EUR </div>
                    <p className="">Quantity</p>
                    <div className="grid grid-cols-5 mt-2">
                        <div className="col-span-1">

                            <input
                                min="1"
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                                className="w-3/4 h-10 border text-center"
                                type="number"
                            />
                        </div>
                        <div className="col-span-2">
                            <button className="h-10 bg-black text-white text-xs px-10 py-2">
                                ADD TO CART
                            </button>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-3 bg-white">
                        <img className="w-full mt-2" src={url.replace(/\|/g, "/")} alt="" />
                        <img className="w-full mt-2" src={url.replace(/\|/g, "/")} alt="" />
                        <img className="w-full mt-2" src={url.replace(/\|/g, "/")} alt="" />
                        <img className="w-full mt-2" src={url.replace(/\|/g, "/")} alt="" />
                        <img className="w-full mt-2" src={url.replace(/\|/g, "/")} alt="" />
                    </div>
                </div>
                <div className="col-span-4">
                    <img className="w-full" src={url.replace(/\|/g, "/")} alt="" />
                </div>
                <div className="col-span-2">asdasdasd</div>
            </div>
        </div>
    )
}

export default Product;