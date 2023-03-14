import Hamburger from "./Hamburger";
import logo from '../../Assets/images/logo.svg'
import { useState } from "react";


const Navbar = (props) => {
    
    return (
        <nav className="lg:px-[16.9rem] md:px-[5rem] md:py-[6.4rem] px-[4rem] py-[2.4rem] flex justify-between items-center" >
            <img src={logo} alt="Loop studio logo icon" className="cursor-pointer w-[192px] z-10" />
            <ul 
                
                role="menubar" 
                className={`text-white text-[2.4rem] md:text-[1.5rem] transition-all ease-in-out duration-300 py-[223px] px-[40px] space-y-[24px] md:space-y-0 md:py-0 md:px-0 ${props.openMenu? "!translate-x-0 overflow-hidden": "-translate-x-[150%] "} navbar-position md:capitalize uppercase md:font-['Alata'] gap-[3.2rem] cursor-pointer  md:flex items-center`}>
                <li className="list-items" role="menuitem">about</li>
                <li className="list-items" role="menuitem">careers</li>
                <li className="list-items" role="menuitem">events</li>
                <li className="list-items" role="menuitem">products</li>
                <li className="list-items" role="menuitem">support</li>
            </ul>
            <Hamburger openMenuHandler={props.openMenuHandler} openMenu={props.openMenu}/>
        </nav>
    )
}

export default Navbar;