import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";
import Home from '../pages/Home';
import Books from "../pages/Books";
import Cart from "../components/Cart";

export const ROUTES = [
    {
        name: "HOME",
        url: "/",
        component: () => <Home />,
        exact: true
    },
    {
        name: "BOOKS",
        url: "/books",
        component: () => <Books />,
        exact: false
    },
    {
        name: "ART",
        url: "/sardor",
        component: () => <Sardor />,
        exact: false
    },
    {
        name: "FURNITURE",
        url: "/sirojiddin",
        component: () => <Sirojiddin />,
        exact: false
    },
    {
        name: "ACCESORIES",
        url: "/register",
        component: () => <Register />,
        exact: false
    },
    {
        name: "APPAREL",
        url: "/apparel",
        component: () => <AddBook />,
        exact: false
    },
    {
        name: "COLLABORATIONS",
        icon: "^",
        url: "/collaborations",
        urll: "/books",
        component: () => <AddBook />,
        name1: "LIBRAIRIE HAYDEE",
        //name2: "PENGUIN COLLECTORS SOCIETY",
    },
    {
        name: "BLOG",
        url: "/blog",
        component: () => <AddBook />,
        exact: false
    },
    // {
    //     name: "CART",
    //     url: "/cart",
    //     component: () => <Cart />,
    //     exact: false
    // },
]