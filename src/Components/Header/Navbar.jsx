import Hamburger from "./Hamburger";
import logo from '../../Assets/images/logo.svg'

const Navbar = () => {
    return (
        <nav className="lg:px-[16.9rem] md:px-[5rem] md:py-[6.4rem] px-[4rem] py-[2.4rem] flex justify-between items-center" >
            <img src={logo} alt="Loop studio logo icon" className="cursor-pointer w-[192px]" />
            <ul role="menubar" className="text-white text-[2.4rem] md:text-[1.5rem] md:capitalize uppercase md:font-['Alata'] gap-[3.2rem] cursor-pointer hidden md:flex items-center">
                <li className="list-items" role="menuitem">about</li>
                <li className="list-items" role="menuitem">careers</li>
                <li className="list-items" role="menuitem">events</li>
                <li className="list-items" role="menuitem">products</li>
                <li className="list-items" role="menuitem">support</li>
                
            </ul>
            <Hamburger/>
        </nav>
    )
}

export default Navbar;