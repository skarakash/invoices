import Image from "next/image";
import plus from "../public/plus.svg";
import Link from 'next/link'

const NewInvoiceButton = () => {

    return (
        <Link
            href={`/create`}
        >
            <button
                className="w-[90px] md:w-[150px] h-[44px] bg-violet rounded-[24px] cursor-pointer flex items-center justify-between pr-[15px] pl-[6px] md:pr-[17px] md:pl-[8px]">
                <p className="bg-[white] h-[32px] w-[32px] rounded-full flex items-center justify-center">
                    <Image src={plus} alt="plus-icon" width={10} height={10} />
                </p>
                <div className="flex items-center font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#FFFFFF]">
                    <p className="md:mr-[4px]">New</p>
                    <span className="hidden md:block">Invoice</span>
                </div>
            </button>
        </Link>
    )
};

export default NewInvoiceButton;