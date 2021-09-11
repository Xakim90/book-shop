import Test from "../pages/Test";
import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";
import Home from '../pages/Home';

export const ROUTES = [
    {
        name: "HOME",
        url: "/",
        component: () => <Home />,
        exact: true
    },
    {
        name: "BOOKS",
        url: "/test",
        component: () => <Test />,
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
        url: "/addbook",
        component: () => <AddBook />,
        exact: false
    },
    {
        name: "COLLABORATI",
        icon: "^",
        url: "/collabaration",
        component: () => <AddBook />,
        exact: false
    },
    {
        name: "BLOG",
        url: "/blog",
        component: () => <AddBook />,
        exact: false
    },
]