import Blade from "../pages/Blade";
import Warface from "../pages/Warface/Warface";
import Armata from "../pages/Armata";
import AdbIcon from '@material-ui/icons/Adb';
import Test from "../pages/Test";
import Sardor from "../pages/Sardor";

export const ROUTES = [
    
    {
        name: "Conqueror's Blade",
        icon: <AdbIcon />,
        url: "/blade",
        component: () => <Blade />
    },
    {
        name: "Warface",
        icon: <AdbIcon />,
        url: "/warface",
        component: () => <Warface />
    },
    {
        name: "Armored Warfare: Проект Армата",
        icon: <AdbIcon />,
        url: "/armata",
        component: () => <Armata />
    },
    {
        name: "CrossFire",
        icon: <AdbIcon />,
        url: "/crossfire",
        component: () => <Blade />
    },
    {
        name: "Skyforge",
        icon: <AdbIcon />,
        url: "/skyforge",
        component: () => <Blade />
    },
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
    }
]