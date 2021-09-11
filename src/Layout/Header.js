import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";
import styles from "./Layout.module.css";
import "./main.css";
import Currency from "../components/Currency";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const Header = (props) => {
    const [hidden, setHidden] = useState("");
    
    const toggleInput = () => {
        setHidden("invisible");
    }
    const toggleX = () => {

    }

    return (
        <div className={styles.main}>
            <br />
            <div className="flex justify-between">
                <div>
                    <Currency />
                </div>
                <div>
                    <img className={"w-24 " + hidden} src="//cdn.shopify.com/s/files/1/0880/2454/files/BookShop_Flat_x360.jpg?v=1534218298" alt="" />
                </div>
                <div>
                    <SearchIcon onClick={toggleInput} id="searchIcon1" className={"mr-6 " + hidden} />
                    <PersonIcon id="personIcon1" className={hidden} />
                    <input id="searchInput1" className="border hidden border-black" type="search" />
                    <span id="x1" className="text-3xl hidden">&times;</span>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center my-auto">

                <div className="grid grid-cols-7 gap-4 cursor-pointer">
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <div key={index + route}>
                                    <Link
                                        to={route.url}>
                                        <span className="no-underline text-sm">{route.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        // <div className="grid grid-cols-12 h-20">
        //     <div className="col-span-7">
        //         <div className="grid grid-cols-7 mt-5">
        //             <div className="col-span-2">
        //                 <div className="flex justify-around">
        //                     <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Store</a>
        //                 </div>
        //             </div>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Catalog</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Library</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Market</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Community</a>
        //         </div>
        //     </div>
        //     <div className="col-span-5">
        //         <div className="grid grid-cols-12">
        //             <div className="col-span-5">

        //             </div>
        //             <div className="col-span-7">
        //                 <div className="flex justify-around mt-5">
        //                     <SearchIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <HelpIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <NotificationsIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <ChatIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <AccountCircleIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <Link to="/">
        //                         <span className="font-bold hover:text-yellow-400 cursor-pointer">
        //                             Войти
        //                         </span>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Header;