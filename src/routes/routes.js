import Test from "../pages/Test";
import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const ROUTES = [

    {
        name: "HOME",
        url: "/test",
        component: () => <Test />,
        exact: true
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
        name: "COLLABORATIONS",
        icon: <ExpandMoreIcon />,
        url: "/addbook",
        component: () => <AddBook />,
         exact: false
    },
    {
        name: "BLOG",
        url: "/addbook",
        component: () => <AddBook />,
         exact: false
    },
]