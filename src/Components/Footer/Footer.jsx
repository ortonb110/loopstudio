import React from "react";
import logo from "../../Assets/images/logo.svg";
import facebook from "../../Assets/images/icon-facebook.svg";
import twitter from "../../Assets/images/icon-twitter.svg";
import instagram from "../../Assets/images/icon-instagram.svg";
import pinterest from "../../Assets/images/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="bg-black w-full xl:h-[16rem] px-[16.5rem] py-[4.4rem] flex flex-col md:flex-row md:justify-between">
      <div className="">
        <img
          src={logo}
          alt="Loop studio logo"
          className="w-[14.4rem] mb-[1.4rem] mx-auto md:mx-0"
        />
        <ul
          role="menubar"
          className={`text-white text-[1.5rem] md:text-[1.5rem] text-center md:text-start  capitalize  md:font-['Alata'] cursor-pointer  md:flex items-center gap-[3.2rem] space-y-[1.6rem] md:space-y-0`}
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
      <div className="text-white text-center">
        <ul
          role="menubar"
          className={`text-white justify-center text-[1.5rem] md:text-[1.5rem] flex gap-[1.6rem] mt-[4.8rem] md:mt-0 mb-[1.4rem] md:mb-[1.6rem] items-center `}
        >
          <li className="list-items cursor-pointer" role="menuitem">
            <img src={facebook} alt="Link to facebook page" />
          </li>
          <li className="list-items cursor-pointer" role="menuitem">
            <img src={twitter} alt="Link to twitter page" />
          </li>
          <li className="list-items cursor-pointer" role="menuitem">
            <img src={pinterest} alt="Link to pinterest page" />
          </li>
          <li className="list-items cursor-pointer" role="menuitem">
            <img src={instagram} alt="Link to instagram page" />
          </li>
        </ul>

        <p className=" text-[13px]   left-0 text-center px-[15px] mt-[40px] md:mt-0 text-white">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw"
            className="capitalize text-gray-500 hover:text-gray-700 font-bold"
          >
            Frontend mentor.
          </a>
          Coded by{" "}
          <a
            href="https://github.com/ortonb110"
            className="capitalize  font-bold text-gray-500 hover:text-gray-700"
          >
            Orton Bright
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
