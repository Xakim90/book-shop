import React from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";


const Header = (props) => {
    return (
        <>
            <div className="flex justify-center my-auto">
                <div className="grid grid-cols-7 gap-4 cursor-pointer">
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <div key={index + route}>
                                    <Link
                                        to={route.url}>
                                        <span className="no-underline">{route.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Header;