import React from 'react';
import CustomCard from '../components/CustomCard';

const images = [
    {
        name: "book1",
        price: "12 $",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-Cover_295x.jpg?v=1631218505",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-1WEB_295x.jpg?v=1631218523",
    },
    {
        name: "book2",
        price: "15 $",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-Cover_295x.jpg?v=1631218557",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-TitleWEB_295x.jpg?v=1631218577",
    },
    {
        name: "book3",
        price: "25 $",
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-Cover_295x.jpg?v=1631218699",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-1WEB_295x.jpg?v=1631218713",
    },
    {
        name: "book4",
        price: "22 $",
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
                        <CustomCard
                            key={index}
                            img={item.photo}
                            img2={item.photo2}
                            title={item.name}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
    )
}
export default Books;