import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const openMenuHandler = () => {
        setOpenMenu(prevMenu => !prevMenu);
        document.body.classList.toggle("lock-scroll")
    }
    return( 
        <header className={`bg-heroMobile md:bg-heroDesktop md:h-[65rem] h-screen 2xl:bg-cover bg-fit  md:bg-fixed bg-no-repeat`}>
            <Navbar openMenuHandler={openMenuHandler} openMenu={openMenu}/>
            <Hero/>
        </header>
    )
}

export default Header