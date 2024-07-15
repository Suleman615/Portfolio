import { useEffect, useState } from "react";
import useLocalStorage from 'use-local-storage';
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { LuAlignRight } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import CV from '../assets/Ghulam-Suleman-Resume.pdf'



const Navbar = () => {
    const [shownav, setNav] = useState(false)


    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    // Function to toggle between dark mode and light mode
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <div className="flex items-center justify-between px-2 md:px-10 fixed w-full bg-white dark:bg-gray-950 z-10 ">


                <a href='#home'><div className="flex cursor-pointer  items-center text-gray-950 dark:text-white"> <FaLessThan size={40} /> <h2 className="font-bold text-[40px] mb-1.5">GS/</h2><FaGreaterThan size={40} /></ div></a>

                <div className=" gap-4 items-center hidden md:flex">
                    <div className="flex gap-4 border-r border-gray-400 pr-4">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="cursor-pointer" onClick={switchTheme}>{(theme === 'light') ? <BsMoonStars size={24} /> : <MdOutlineLightMode size={24} />}</div>
                    <a href={CV} download className="px-4 rounded-xl py-1 bg-gray-950 text-white font-semibold     dark:text-gray-950 dark:bg-white">
                        Download CV
                    </a>
                </div>

                {(shownav) ? <RxCross2 className="block md:hidden " onClick={() => { setNav(!shownav) }} size={34} /> : <LuAlignRight className="block md:hidden " onClick={() => { setNav(!shownav) }} size={34} />}


            </div>
            <div className={`flex pb-4 flex-col w-full  shadow-b shadow-lg rounde-b rounded-2xl  fixed bg-white dark:shadow-white dark:bg-gray-950 gap-4 px-6 v ${(shownav) ? 'block md:hidden' : 'hidden'}`}>
                <div className="flex pt-20  flex-col gap-4 border-b pb-5 border-gray-400 pr-4">
                    <a onClick={() => { setNav(!shownav) }} href="#about">About</a>
                    <a onClick={() => { setNav(!shownav) }} href="#skills">Skills</a>
                    <a onClick={() => { setNav(!shownav) }} href="#projects">Projects</a>
                    <a onClick={() => { setNav(!shownav) }} href="#experience">Experience</a>
                    <a onClick={() => { setNav(!shownav) }} href="#contact">Contact</a>
                </div>
                <div className="cursor-pointer flex justify-between  gap-10" onClick={() => { switchTheme(), setNav(!shownav) }}><p>Switch Theme</p>{(theme === 'light') ? <BsMoonStars size={24} /> : <MdOutlineLightMode size={24} />}</div>
                <a href={CV} download className="px-10 md:px-4 w-auto text-center sm:w-fit rounded-xl py-1 bg-gray-950 text-white font-semibold dark:text-gray-950 dark:bg-white">
                    Download CV
                </a>
            </div>
        </>

    );
};

export default Navbar;
