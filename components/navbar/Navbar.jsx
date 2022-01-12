import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps} hover:text-[#004EBF] hover:underline `} >
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center bg-[#F7F7F7] py-5 px-8 md:px-0">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img className="" src={"/logo.png"} alt="Logo Hyperspread" />
            </div>
            <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Navigation Item 1", "Navigation Item 2", "Navigation Item 3"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
            </ul>
            <div className="flex relative">
                {toggleMenu 
                    ? <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <ul 
                        className="z-10 fixed top-0 -right-2 w-[60vw] h-screen shadow-2xl md:hidden list-none 
                        flex flex-col justify-start items-end bg-[#F7F7F7] text-black animate-slide-in"
                    >
                        <li className="text-xl w-full px-5 py-5 cursor-pointer">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Navigation Item 1", "Navigation Item 2", "Navigation Item 3"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="pr-5 my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;