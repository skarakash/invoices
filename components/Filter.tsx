'use client';
import Image from "next/image";
import shevron from "../public/shevron.svg";
import check from "../public/check.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useOutsideClick from "@/app/hooks/useOutsideClick";

const VALUES = ["draft", "pending", "paid"];
export default function Filter(
    {
        setSelectedTypes,
        selectedTypes
    }:
        {
            setSelectedTypes: (value: string[]) => void
            selectedTypes: string[]
        }) {
    const [filterOpen, toggleFilter] = useState(false)
    const handleClick = () => {
        toggleFilter(false)
    }
    const ref = useOutsideClick(handleClick)
    const handleMenuClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const value = e.currentTarget.getAttribute("data-value") as string;
        if (selectedTypes.includes(value)) {
            setSelectedTypes(selectedTypes.filter(type => type !== value))
        } else {
            setSelectedTypes([...selectedTypes, value])
        }
    }

    return (
        <div className="flex cursor-pointer relative select-none">
            <div className="flex text-headings items-center font-bold text-[15px] leading-[15px] tracking-[-0.25px]" onClick={() => toggleFilter(!filterOpen)}>
                <p className="md:mr-[4px]">Filter</p>
                <span className="hidden md:block">by status</span>
                <Image src={shevron} alt="menu arrow icon" className={cn('ml-[12px] md:ml-[14px]', { "rotate-180": filterOpen })} />
            </div>
            <ul ref={ref} className={cn(`hidden absolute w-[192px] shadow-custom rounded-[8px] p-[24px] bg-filter top-[35px] left-[-40px]`, {
                "block": filterOpen,
            })}>
                {
                    VALUES.map((value) => (
                        <li
                            key={value}
                            data-value={value}
                            className=" group [&:not(:last-child)]:mb-[15px] flex"
                            onClick={e => handleMenuClick(e)}
                        >
                            <div className={cn(`bg-[#DFE3FA] h-[16px] w-[16px] flex items-center justify-center mr-[13px] rounded-[2px] group-hover:border-violet group-hover:border-[1px]`, {
                                "bg-violet": selectedTypes.includes(value)
                            })}>
                                {selectedTypes.includes(value) && <Image src={check} alt="check icon" className="" />}
                            </div>
                            <p className="text-[15px] font-bold leading-[15px] tracking-[-0.25px]">{`${value.charAt(0).toUpperCase()}${value.slice(1)}`}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
