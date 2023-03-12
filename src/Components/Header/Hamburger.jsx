import { Fragment } from "react"


const Hamburger = (props) => {
    return(
        <Fragment>
            <button
            type="button"
            aria-label="Open Menu"
            aria-pressed= "false"
            
            className={`flex flex-col gap-[5px] md:hidden `}
            >
                <span className="inline-block w-[24px] h-[2px] bg-white" aria-hidden="true"></span>
                <span className="inline-block w-[24px] h-[2px] bg-white" aria-hidden="true"></span>
                <span className="inline-block w-[24px] h-[2px] bg-white" aria-hidden="true"></span>
                
                
            </button>
        </Fragment>
    )
}
export default Hamburger;