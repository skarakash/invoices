import Image from "next/image";
import icon from "../public/icon.svg";
const HeaderIcon = () => {
    return (
        <div className="flex items-center justify-center bg-violet w-[72px] h-[72px] rounded-r-[20px] relative overflow-hidden">
            <div className="w-[72px] h-[36px] bg-violet-light absolute top-[36px] rounded-tl-[20px]"></div>
            <Image 
                priority
                src={icon}
                alt="icon"
                width={28}
                height={26}
                className="z-10"
            />
        </div>
    );
};

export default HeaderIcon; 