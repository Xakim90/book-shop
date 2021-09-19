import React, { useState } from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const CustomCard = ({ img, img2, title, price, id, doublePhoto = true }) => {
=======
const CustomCard = ({ img, img2, title, price, doublePhoto = true }) => {
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
    const [photo, setPhoto] = useState(false);

    return (
        <div>
<<<<<<< HEAD
            {/* <img
                className="w-full h-96 img-fluid cursor-pointer"
                onMouseOver={() => setPhoto(doublePhoto)}
                onMouseOut={() => setPhoto(false)}
                src={!photo ? img : img2}
                alt="Book"
            /> */}
=======
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
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
<<<<<<< HEAD
                    <Link to={"/product/" + img.replace("https://", "")}>
                        <img className="cursor-pointer" src={img} alt="books" />
                    </Link>
                )
            }
=======
                    <img src={img} alt="" />
                )
            }

>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
            <h1 className="text-xl">{title}</h1>
            <h1>{price}</h1>
        </div>
    )
}
export default CustomCard;