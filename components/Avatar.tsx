import Image from "next/image";
import avatar from "../public/image-avatar.jpg";
const Avatar = () => {
    return (
        <div className="w-[80px] flex justify-center items-center">
            <Image  
                src={avatar}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full"
            />
        </div>
    )
};

export default Avatar;