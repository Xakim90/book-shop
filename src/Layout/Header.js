import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";
import styles from "./Layout.module.css";
import "./main.css";
import Currency from "../components/Currency";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Header = (props) => {
    const [hidden, setHidden] = useState("");
    const [hidden2, setHidden2] = useState("hidden");
    const [hidden3, setHidden3] = useState("hidden");
    const [more, setMore] = useState(false)

    const toggleInput = () => {
        setHidden("invisible");
        setHidden2("");
    }
    const toggleAccount = () => {
        setHidden("invisible");
        setHidden3("");
    }
    const toggleX = () => {
        setHidden("");
        setHidden2("hidden");
    }
    const toggleX2 = () => {
        setHidden("");
        setHidden3("hidden");
    }

    return (
        <div className={styles.main}>
            <br />
            <div className="grid grid-cols-12 justify-items-center place-items-center">
                <div className="col-span-3 justify-items-start">
                    <Currency />
                </div>
                <div className="col-span-6">
                    <img className="w-24" src="//cdn.shopify.com/s/files/1/0880/2454/files/BookShop_Flat_x360.jpg?v=1534218298" alt="" />
                </div>
                <div className="col-span-3">
                    <SearchIcon onClick={toggleInput} id="searchIcon1" className={"mr-6 cursor-pointer " + hidden} />
                    <PersonIcon onClick={toggleAccount} id="personIcon1" className={"cursor-pointer " + hidden} />
                    <input id="searchInput1" className={"border border-black " + hidden2} type="search" />
                    <div className={hidden3 + " inline"}>
                        <Link className="text-bold" to="login">Log in </ Link>
                        or
                        <Link className="text-bold" to="register"> Sign up</Link>
                    </div>
                    <span onClick={toggleX} className={"text-3xl cursor-pointer " + hidden2}>&times; </span>
                    <span onClick={toggleX2} className={"text-2xl cursor-pointer " + hidden3}>&times; </span>
                </div>
            </div>

            <br />
            <br />
            <br />
            <div className="flex justify-center my-auto">

                <div className="grid grid-cols-8 gap-4 cursor-pointer h-24">
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <div key={index + route}>
                                    <Link
                                        to={route.url}>
                                        <span
                                            onMouseOver={route.icon ? () => setMore(true) : null}
                                            onMouseOut={route.icon ? () => setMore(false) : null}
                                            className="no-underline text-sm">
                                            {route.name}
                                            {route.icon ?
                                                <span>
                                                    {
                                                        !more ? <ExpandMoreIcon /> : <ExpandLessIcon />
                                                    }
                                                </span> : ""
                                            }
                                        </span>
                                        {
                                            route.icon ?
                                                more ? (
                                                    <div>
                                                        <div>
                                                            Qalesan
                                                        </div>
                                                    </div>
                                                ) : null
                                                : null
                                        }
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