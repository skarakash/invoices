import HeaderIcon from "./HeaderIcon";
import { ThemeToggle } from "./theme-toggle";
import Avatar from "./Avatar";
const Sidebar = () => {
    return (
        <div className="h-[72px] bg-sidebar flex mb-[32px]">
            <HeaderIcon />
            <ThemeToggle  className="ml-auto w-[72px] h-[100%]"/>
            <Avatar />
        </div>
    )
};

export default Sidebar;