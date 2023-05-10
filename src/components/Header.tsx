"use client"

import Image from "next/image"
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <header className="fixed top-0 left-0 w-full p-8 flex justify-between">
      <Image src="/package.png" alt="Logo" width={32} height={32} className="h-8 animate-bounce" />

      <Image src={open ? '/icon-close.svg' : '/icon-hamburger.svg'} alt="Button hamburger" width={40} height={40} className="z-20 fixed right-5 top-6 cursor-pointer lg:hidden" onClick={handleOpen} />

      <nav className={`text-xl lg:text-base tracking-wide flex flex-col lg:flex-row items-center gap-8 bg-[#23304c]/80 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-none p-20 lg:p-0 z-10 lg:static fixed top-0 lg:h-auto h-screen duration-500 ease-linear ${!open ? 'right-[-100%]' : 'right-0'}`}>
        <a href="" className="hover:scale-125 duration-300 py-1 hover:text-teal-400">Home</a>
        <a href="" className="hover:scale-125 duration-300 py-1 hover:text-teal-400">Product</a>
        <a href="" className="hover:scale-125 duration-300 py-1 hover:text-teal-400">About us</a>
        <a href="" className="hover:scale-125 duration-300 py-1 hover:text-teal-400">Contact</a>

        <button className="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300">GET STARTED</button>
      </nav>
    </header>
  )
}