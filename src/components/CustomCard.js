import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomCard = ({ img1, img2, title, narx, doublePhoto = true }) => {

    const [photo, setPhoto] = useState(false)
    return (

        <>
            <div>
                {/* <div className="t-5">
                    <div className="rounded-full bg-gray-300 w-20 h-20 out sold text-white font-family">
                        SOLD
                        <div>OUT</div>
                    </div>
                </div> */}

                {
                    doublePhoto ? (
                        <img
                            className="w-full h-96 img-fluid cursor-pointer"
                            src={!photo ? img1 : img2}
                            onMouseOver={() => setPhoto(true)}
                            onMouseOut={() => setPhoto(false)}
                            alt="books"
                        />
                    ) : (
                        <Link to={"product/" + title}>
                            <img src={img1} alt="books" />
                        </Link>
                    )
                }
                <i className="text-md font-serif">{title}</i>
                <p className="text-sm">{narx}</p>
                <br />

            </div>
        </>
    )
}

export default CustomCard;