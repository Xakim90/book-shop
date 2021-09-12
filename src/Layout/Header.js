import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";
import "./main.css";
import Currency from "../components/Currency";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Header = (props) => {
    const [hidden, setHidden] = useState("");
    const [hidden2, setHidden2] = useState("hidden");
    const [hidden3, setHidden3] = useState("hidden");

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
        <div className="h-64">
            <br />
            <div className="grid grid-cols-12 place-items-center">
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
            <div className="flex justify-center my-auto">

                <div className="grid grid-cols-9 gap-2 cursor-pointer text-sm font-mono">
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <div key={index + route} className={route.icon ? "myClass2" : ""}>
                                    <Link
                                        to={route.url}>
                                        <span
                                            className="no-underline text-sm">
                                            {route.name}
                                            {route.icon ?
                                                <span><ExpandLessIcon fontSize="small" className="myClass3" /></span> : ""
                                            }
                                        </span>
                                    </Link>
                                    {
                                        route.icon ?
                                            (
                                                <div className="relative myClass">
                                                    <div className="absolute p-3 shadow-2xl">
                                                        <Link to={route.urll}>
                                                            <div>{route.name1}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    )
}
export default Header;