import AdbIcon from '@material-ui/icons/Adb';
import Test from "../pages/Test";
import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Uliqpan from "../pages/Uliqpan";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";

export const ROUTES = [
    
  
    {
        name: "Test",
        icon: <AdbIcon />,
        url: "/test",
        component: () => <Test />
    },
    {
        name: "Sardor",
        icon: <AdbIcon />,
        url: "/sardor",
        component: () => <Sardor />
    },
    {
        name: "Sirojiddin",
        icon: <AdbIcon />,
        url: "/sirojiddin",
        component: () => <Sirojiddin />
    },
    {
        name: "Uliqpan",
        icon: <AdbIcon />,
        url: "/uliqpan",
        component: () => <Uliqpan />
    },
    {
        name: "Register",
        icon: <AdbIcon />,
        url: "/register",
        component: () => <Register />
    },
    {
        name: "AddBook",
        icon: <AdbIcon />,
        url: "/addBook",
        component: () => <AddBook />
    }
]