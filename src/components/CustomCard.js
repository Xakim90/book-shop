import React, { useState } from "react";

const CustomCard = ({ img1, img2, title, narx }) => {
    const [photo, setPhoto] = useState(false);
    return (
        <div>
            <img className="w-full h-96 img-fluid cursor-pointer"
                onMouseOver={() => setPhoto(true)}
                onMouseOut={() => setPhoto(false)}
                src={!photo ? img1 : img2} alt="" />
            <h1 className="text-xl">{title}</h1>
            <p>{narx}</p>
        </div>
    )
}
export default CustomCard;