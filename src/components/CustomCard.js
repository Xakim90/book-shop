import React, { useState } from 'react';

const CustomCard = ({ img1, img2, title, narx }) => {
    const [photo, setPhoto] = useState(false)
    return (
        <>
            <div>
                <img
                className="w-full h-96 img-fluid cursor-pionter"
                    src={!photo ? img1 : img2}
                    onMouseOver={() => setPhoto(true)}
                    onMouseOut={() => setPhoto(false)}
                    alt="books"
                />
                <h1 className="text-md font-serif">{title}</h1>
                <p className="h-3/4 text-sm">{narx}</p>
                <br />
            </div>
        </>
    )
}

export default CustomCard;