import React from 'react';
import { ROUTES2 } from "../routes/routes2";
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useForm } from 'react-hook-form';

function Footer() {

    const {
        register,
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    const onsubmit = data => console.log('Отправлено:', data);


    return (
        <div>
            <div className="grid grid-cols-12 bg-gray-200">
                <div className="col-span-4 m-10">
                    <h1>B O O K / S H O P</h1>
                    <div className="my-5">
                        <div className="text-sm">
                            <span className="font-bold">BOOK/SHOP</span>
                            is a
                            design-minded concept shop offering
                            objects, events, and experiences related to books and the reading experience.
                        </div>
                        <br />
                        <div className="font-normal">
                            4268 Broadway, Oakland, CA 94611.
                        </div>
                        <br />
                        <div className="font-normal">
                            Tues-Sat; 11am-5pm.
                        </div>
                        <br />
                        <div className="font-normal">
                            Powered by Shopify
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-lx m-20">
                        {ROUTES2.map((route, index) => {
                            return (
                                <div key={index + route}>
                                    <Link to={route.url}>
                                        <span>
                                            {route.name}
                                            {route.component}
                                        </span>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-4 m-10">
                    <div className="">SUBSCRIBE</div>
                    <div className="font-normal text-sm my-3">Stay informed about events and product launches</div>
                    <div >
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <input
                                className="p-4 text-xs tracking-widest border-black"
                                placeholder="Your Email"
                                type="text"
                                {...register("email")}
                            />

                            <button type="submit" className="bg-black text-white p-4 text-xs ml-3">OK</button>
                        </form>
                    </div>
                    <div className="text-black my-5">
                        <span><FacebookIcon /></span>
                        <span className="ml-5"><InstagramIcon /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;