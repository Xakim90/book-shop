import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";
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
    const [more, setMore] = useState(false);

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
        <div>
            <br />
            <div className="flex justify-between">
                <div>
                    <Currency />
                </div>
                <div>
                    <img className="w-24" src="//cdn.shopify.com/s/files/1/0880/2454/files/BookShop_Flat_x360.jpg?v=1534218298" alt="" />
                </div>
                <div>
                    <SearchIcon onClick={toggleInput} id="searchIcon1" className={"mr-6 cursor-pointer " + hidden} />
                    <PersonIcon onClick={toggleAccount} id="personIcon1" className={"cursor-pointer " + hidden} />
                    <input id="searchInput1" className={"border  border-black " + hidden2} type="search" />
                    <div className={hidden3 + " inline"}>
                        <Link className="text-bold" to="login">Log in </ Link>
                        or
                        <Link className="text-bold" to="register"> Sign up</Link>
                    </div>
                    <span onClick={toggleX} className={"text-3xl cursor-pointer " + hidden2}>&times;</span>
                    <span onClick={toggleX2} className={"text-2xl cursor-pointer " + hidden3}>&times;</span>
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
                                    <Link to={route.url}>
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
                                            route.icon
                                                ? more ?
                                                    (
                                                        <div className="relative">
                                                            <div
                                                                className="absolute text-center bg-white
                                                                rounded-xl w-full cursor-pointer"
                                                            >
                                                                <div>Sirojiddin</div>
                                                                <div>Zuxriddinov</div>
                                                                <div>Zuxriddinov</div>
                                                                <div>Zuxriddinov</div>
                                                            </div>
                                                        </div>
                                                    )
                                                    : null
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
    )
}
export default Header;