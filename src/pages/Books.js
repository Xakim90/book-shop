import React from 'react';
import CustomCard from '../components/CustomCard';

<<<<<<< HEAD
const images = [
    {
        name: "book1",
        price: "12 $",
=======

const images = [
    {
        name: "BERLIN AND PHENOMENA BY WOLF VOSTELL",
        price: "$27.17 AUD",
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-Cover_295x.jpg?v=1631218505",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Vostell-1WEB_295x.jpg?v=1631218523",
    },
    {
<<<<<<< HEAD
        name: "book2",
        price: "15 $",
=======
        name: "JOSEF ALBERS: TO OPEN EYES",
        price: "$339.61 AUD",
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-Cover_295x.jpg?v=1631218557",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Albers-TitleWEB_295x.jpg?v=1631218577",
    },
    {
<<<<<<< HEAD
        name: "book3",
        price: "25 $",
=======
        name: "BRANCHES BY FRANK SAMPERI",
        price: "$27.17 AUD",
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-Cover_295x.jpg?v=1631218699",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Samperi-1WEB_295x.jpg?v=1631218713",
    },
    {
<<<<<<< HEAD
        name: "book4",
        price: "22 $",
=======
        name: "CULTURE CHANEL: THE WOMAN WHO READS BY JEAN-LOUIS FROMENT",
        price: "$271.69 AUD",
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
        photo: "https://cdn.shopify.com/s/files/1/0880/2454/products/Chanel-Cover_ba33dbc7-2e68-4e7f-b5ba-4e33e5bf8bb4_295x.jpg?v=1631218750",
        photo2: "https://cdn.shopify.com/s/files/1/0880/2454/products/Chanel-TitleWEB_295x.jpg?v=1631218764",
    },
]
<<<<<<< HEAD

=======
>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
const Books = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                images.map((item, index) => {
                    return (
<<<<<<< HEAD
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
=======
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

>>>>>>> e916ee8753cfe191afcbbcca326410793aa30c2e
export default Books;