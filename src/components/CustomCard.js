import React, { useState } from 'react';

<<<<<<< HEAD
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
=======
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

>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
export default CustomCard;