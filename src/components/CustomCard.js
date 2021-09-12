import React, { useState } from 'react';

const CustomCard = ({ img, img2, title, price }) => {
    const [photo, setPhoto] = useState(false);

    return (
        <div>
            <img
                className="w-full h-96 img-fluid cursor-pointer"
                onMouseOver={() => setPhoto(true)}
                onMouseOut={() => setPhoto(false)}
                src={!photo ? img : img2}
                alt="Book"
            />
            <h1 className="text-xl">{title}</h1>
            <h1>{price}</h1>
        </div>
    )
}
export default CustomCard;