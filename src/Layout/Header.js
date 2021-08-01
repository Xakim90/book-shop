import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from '@material-ui/core';

const Header = (props) => {
    return (
        <div className="grid grid-cols-12 h-20">
            <div className="col-span-7">
                <div className="grid grid-cols-7 mt-5">
                    <div className="col-span-2">
                        <div className="flex justify-around">
                            <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Store</a>
                        </div>
                    </div>
                    <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Catalog</a>
                    <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Library</a>
                    <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Market</a>
                    <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Community</a>
                </div>
            </div>
            <div className="col-span-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-5">

                    </div>
                    <div className="col-span-7">
                        <div className="flex justify-around mt-5">
                            <SearchIcon className="hover:text-yellow-400 cursor-pointer" />
                            <HelpIcon className="hover:text-yellow-400 cursor-pointer" />
                            <NotificationsIcon className="hover:text-yellow-400 cursor-pointer" />
                            <ChatIcon className="hover:text-yellow-400 cursor-pointer" />
                            <AccountCircleIcon className="hover:text-yellow-400 cursor-pointer" />
                            <Link to="/">
                                <span className="font-bold hover:text-yellow-400 cursor-pointer">
                                    Войти
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;