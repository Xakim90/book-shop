import Blade from "../pages/Blade";
import Warface from "../pages/Warface/Warface";
import Armata from "../pages/Armata";
import AdbIcon from '@material-ui/icons/Adb';
import Test from "../pages/Test";
import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";

export const ROUTES = [

    {
        name: "BOOKS",
        icon: <AdbIcon />,
        url: "/test",
        component: () => <Test />
    },
    {
        name: "ART",
        icon: <AdbIcon />,
        url: "/sardor",
        component: () => <Sardor />
    },
    {
        name: "FURNITURE",
        icon: <AdbIcon />,
        url: "/sirojiddin",
        component: () => <Sirojiddin />
    },
    {
        name: "ACCESORIES",
        icon: <AdbIcon />,
        url: "/register",
        component: () => <Register />
    },
    {
        name: "APPAREL",
        icon: <AdbIcon />,
        url: "/addbook",
        component: () => <AddBook />
    },
    {
        name: "COLLABORATIONS",
        icon: <AdbIcon />,
        url: "/addbook",
        component: () => <AddBook />
    },
    {
        name: "BLOG",
        icon: <AdbIcon />,
        url: "/addbook",
        component: () => <AddBook />
    },
]