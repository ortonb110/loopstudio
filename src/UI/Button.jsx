

import React from 'react'

function Button(props) {
  return (
    <button
        aria-pressed = "false"
        className={`${props.classes}  py-[1.3rem] px-[3.8rem] md:py-[1.3rem] md:px-[4.3rem] border-[1px] text-[1.4rem] uppercase font-["Alata"] tracking-[5px] border-veryDarkGray hover:bg-black hover:text-white transition-all ease-in-out duration-200`}
    >
        {props.children}
    </button>
  )
}

export default Button