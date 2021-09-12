import React from 'react';
import CustomCard from '../components/CustomCard';


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
const Books = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                images.map((item, index) => {
                    return (
                        <div>
                            <CustomCard
                                key={index}
                                img1={item.photo}
                                img2={item.photo2}
                                narx={item.price}
                                title={item.name}
                            />
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Books;