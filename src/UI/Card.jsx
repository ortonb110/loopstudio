import React from "react";


function Card(props) {
    const titleLength = props.cardDetails.title.length;
    console.log(titleLength)
  return (
    <div className="relative cursor-pointer hover:opacity-30 transition-all ease-in-out duration-300">
      <picture className="">
        <source media="(min-width: 800px)" srcSet={props.cardDetails.imageDesktop} />
        <img src={props.cardDetails.imageMobile} alt={props.cardDetails.alt} />
      </picture>
      <div className="w-full bg-gradient-to-b from-black/5 to-black/50 absolute bottom-0 py-6 h-full">
        <h3 className={`text-[2.4rem] md:text-[3.2rem] bottom-0 absolute uppercase leading-[2.4rem] md:leading-[3.2rem] w-[10rem]  ${titleLength > 10 && "w-fit"} text-white pl-[2rem] md:pl-[4rem] pb-[2rem] md:pb-[3.2rem]`}>{props.cardDetails.title}</h3>
      </div>
    </div>
  );
}

export default Card;
