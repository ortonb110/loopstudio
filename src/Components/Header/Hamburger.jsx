import { Fragment } from "react"


const Hamburger = (props) => {
    return(
        <Fragment>
            <button
            type="button"
            aria-label="Open Menu"
            aria-pressed= {props.openMenu}
            onClick={props.openMenuHandler}
            className={`flex flex-col gap-[5px] md:hidden z-10`}
            >
                <span className="inline-block w-[24px] h-[2px] bg-white" aria-hidden="true"></span>
                <span className={`inline-block w-[24px] h-[2px] transition-all ease-in-out duration-200 bg-white ${props.openMenu && "translate-x-2"}`} aria-hidden="true"></span>
                <span className="inline-block w-[24px] h-[2px] bg-white" aria-hidden="true"></span>
                
                
            </button>
        </Fragment>
    )
}
export default Hamburger;