"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import SunIcon from '../public/sun.svg'
import MoonIcon from '../public/moon.svg'
import Image from "next/image"

export function ThemeToggle({ className }: { className: string }) {
    const { theme, setTheme } = useTheme()
    const newTheme = theme === "light" ? "dark" : "light"
    return (
        <button onClick={() => setTheme(newTheme)} className="w-[72px] ml-auto h-[100%] bg-sidebar flex justify-center items-center cursor-pointer">
            <Image src={MoonIcon} alt="moon-icon" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Image src={SunIcon} alt="sun-icon" className="absolute h-[1.2rem] w-[1.2rem] rotate-90  scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}