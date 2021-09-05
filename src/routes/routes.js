import AdbIcon from '@material-ui/icons/Adb';
import Test from "../pages/Test";
import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Uliqpan from "../pages/Uliqpan";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";

export const ROUTES = [
    
  
    {
        name: "BOOKS",
        url: "/test",
        component: () => <Test />
    },
    {
        name: "ART",
        url: "/sardor",
        component: () => <Sardor />
    },
    {
        name: "FURNITURE",
        url: "/sirojiddin",
        component: () => <Sirojiddin />
    },
    {
        name: "ACCESOIRES",
        url: "/uliqpan",
        component: () => <Uliqpan />
    },
    {
        name: "APAREL",
        url: "/register",
        component: () => <Register />
    },
    {
        name: "COLLABARATIOS",
        url: "/addBook",
        component: () => <AddBook />
    },
    {
        name: "BLOG",
        url: "/addBook",
        component: () => <AddBook />
    }
]