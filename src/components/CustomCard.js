import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomCard = ({ img, img2, title, price, id, doublePhoto = true }) => {
    const [photo, setPhoto] = useState(false);

    return (
        <div>
            {/* <img
                className="w-full h-96 img-fluid cursor-pointer"
                onMouseOver={() => setPhoto(doublePhoto)}
                onMouseOut={() => setPhoto(false)}
                src={!photo ? img : img2}
                alt="Book"
            /> */}
            {
                doublePhoto ? (
                    <img
                        className="w-full h-96 img-fluid cursor-pointer"
                        onMouseOver={() => setPhoto(true)}
                        onMouseOut={() => setPhoto(false)}
                        src={!photo ? img : img2}
                        alt="Book"
                    />
                ) : (
                    <Link to={"/product/" + img.replace("https://", "")}>
                        <img className="cursor-pointer" src={img} alt="books" />
                    </Link>
                )
            }
            <h1 className="text-xl">{title}</h1>
            <h1>{price}</h1>
        </div>
    )
}
export default CustomCard;