<<<<<<< HEAD
import React from 'react'
import CustomCard from '../components/CustomCard';
import { images } from '../routes/images';
import { Link } from 'react-router-dom';

=======
import React from 'react';
import CustomCard from '../components/CustomCard';
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a

const images = [
    {
        name: "BERLIN AND PHENOMENA BY WOLF VOSTELL",
        price: "$27.17 AUD",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-Cover_295x.jpg?v=1631218505",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-1WEB_295x.jpg?v=1631218523",
    },
    {
        name: "JOSEF ALBERS: TO OPEN EYES",
        price: "$339.61 AUD",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-Cover_295x.jpg?v=1631218557",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-TitleWEB_295x.jpg?v=1631218577",
    },
    {
        name: "BRANCHES BY FRANK SAMPERI",
        price: "$27.17 AUD",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-Cover_295x.jpg?v=1631218699",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-1WEB_295x.jpg?v=1631218713",
    },
    {
        name: "CULTURE CHANEL: THE WOMAN WHO READS BY JEAN-LOUIS FROMENT",
        price: "$271.69 AUD",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Chanel-Cover_ba33dbc7-2e68-4e7f-b5ba-4e33e5bf8bb4_295x.jpg?v=1631218750",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Chanel-TitleWEB_295x.jpg?v=1631218764",
    },
]
const Home = () => {
    return (
        <div>
            <div>
<<<<<<< HEAD
                <img
                    className="w-full"
=======
                <img className="w-full"
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
                    src="https://cdn.shopify.com/s/files/1/0880/2454/files/0_bda999bf-aeb8-4cec-8026-616365c35b8b_1500x.jpg?v=1622668580"
                    alt=""
                />
            </div>
<<<<<<< HEAD
            <br />
            <hr />
            <br />
=======
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
            <div className="grid grid-cols-4 gap-4">
                {
                    images.map((item, index) => {
                        return (
<<<<<<< HEAD
                            <Link key={item+index} to="/cart">
                                <CustomCard
                                    key={index}
                                    img={item.photo}
                                    img2={item.photo2}
                                    title={item.name}
                                    price={item.price}
                                    doublePhoto={false}
                                />
                            </Link>
=======
                            <CustomCard
                                key={index}
                                img={item.photo}
                                img2={item.photo2}
                                title={item.name}
                                price={item.price}
                                doublePhoto={false}
                            />
>>>>>>> a2f67760b797c9531bd0dee851fcf58d638ccc1a
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;