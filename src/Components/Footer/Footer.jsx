import React from "react";
import logo from "../../Assets/images/logo.svg";

function Footer() {
  return (
    <footer className="bg-black w-full px-[16.5rem] py-[4.4rem]">
      <div>
        <img src={logo} alt="Loop studio logo" className="w-[14.4rem] mb-[2.4rem]"/>
        <ul
          role="menubar"
          className={`text-white text-[2.4rem] md:text-[1.5rem]   md:capitalize uppercase md:font-['Alata'] cursor-pointer  md:flex items-center gap-[3.2rem]`}
        >
          <li className="list-items" role="menuitem">
            about
          </li>
          <li className="list-items" role="menuitem">
            careers
          </li>
          <li className="list-items" role="menuitem">
            events
          </li>
          <li className="list-items" role="menuitem">
            products
          </li>
          <li className="list-items" role="menuitem">
            support
          </li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
