import interactiveDesktop from "../../Assets/images/desktop/image-interactive.jpg";
import interactiveMobile from "../../Assets/images/mobile/image-interactive.jpg";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import earthDesktop from "../../Assets/images/desktop/image-deep-earth.jpg";
import earthMobile from "../../Assets/images/mobile/image-deep-earth.jpg";
import nightDesktop from "../../Assets/images/desktop/image-night-arcade.jpg";
import nightMobile from "../../Assets/images/mobile/image-night-arcade.jpg";
import soccerDesktop from "../../Assets/images/desktop/image-soccer-team.jpg";
import soccerMobile from "../../Assets/images/mobile/image-soccer-team.jpg";
import girdDesktop from "../../Assets/images/desktop/image-grid.jpg";
import gridMobile from "../../Assets/images/mobile/image-grid.jpg";
import aboveDesktop from "../../Assets/images/desktop/image-from-above.jpg";
import aboveMobile from "../../Assets/images/mobile/image-from-above.jpg";
import pocketDesktop from "../../Assets/images/desktop/image-pocket-borealis.jpg";
import pocketMobile from "../../Assets/images/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "../../Assets/images/desktop/image-curiosity.jpg";
import curiosityMobile from "../../Assets/images/mobile/image-curiosity.jpg";
import fisheyeDesktop from "../../Assets/images/desktop/image-fisheye.jpg";
import fisheyeMobile from "../../Assets/images/mobile/image-fisheye.jpg";




const cardObject = [
  {
    title: "deep earth",
    imageMobile: earthMobile,
    imageDesktop: earthDesktop,
  },
  {
    title: "night arcade",
    imageMobile: nightMobile,
    imageDesktop: nightDesktop,
  },
  {
    title: "soccer team vr",
    imageMobile: soccerMobile,
    imageDesktop: soccerDesktop,
  },
  {
    title: "the grid",
    imageMobile: gridMobile,
    imageDesktop: girdDesktop,
  },
  {
    title: "from up above vr",
    imageMobile: aboveMobile,
    imageDesktop: aboveDesktop,
  },
  {
    title: "pocket borealis",
    imageMobile: pocketMobile,
    imageDesktop: pocketDesktop,
  },
  {
    title: "the curiosity",
    imageMobile: curiosityMobile,
    imageDesktop: curiosityDesktop,
  },
  {
    title: "make it fisheye",
    imageMobile: fisheyeMobile,
    imageDesktop: fisheyeDesktop,
  },
];

const Main = () => {
  return (
    <main>
      <article className="xl:flex  w-[90%]  xl:w-[111.1rem] mx-auto mt-[9.6rem] md:mt-[16rem]  mb-[18.4rem]">
        <picture className="">
          <source media="(min-width: 800px)" srcSet={interactiveDesktop} />
          <img
            src={interactiveMobile}
            alt="A person wearing a VR headset having fun"
            className="md:mx-auto xl:mx-0"
          />
        </picture>
        <div className=" xl:relative md:text-center xl:text-start">
          <div className="xl:absolute bottom-0 left-[-15rem] bg-white p-[4.8rem] xl:p-0 xl:pt-[9.6rem] xl:pl-[9.6rem]  text-center xl:text-start">
            <h2 className="uppercase text-[3.2rem] w-[27.9rem] md:w-[50rem] xl:w-fit mx-auto xl:mx-0 md:text-[4.8rem] leading-[3.2rem] md:leading-[4.8rem] mb-[2.5rem]">
              the leader in interactive vr
            </h2>
            <p className='text-[1.5rem] font-["Alata"] text-darkGray leading-[2.5rem] md:leading-[2rem] w-[27.9rem] mx-auto xl:mx-0 md:w-[44.5rem]'>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </article>
      <section className=" px-[2.4rem] md:px-[6rem] lg:px-[10rem] xl:px-[16.4rem] md:static pb-[3.4rem] md:pb-0 md:mb-[18.4rem] relative">
        <div className="flex justify-between mb-[8rem] items-center">
          <h3 className="text-[3.2rem] uppercase leading-[3.2rem]">
            our creations
          </h3>
          <Button
            classes={`absolute md:static bottom-[5rem] left-[50%] translate-x-[-50%] xl:translate-x-0 md:translate-x-0`}
          >
            see all
          </Button>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-[3rem] mb-[18.4rem]">
            {
                cardObject.map((items, key)=>(
                    <li key={key} ><Card cardDetails={items}/></li>
                ))
            }
        </ul>
      </section>
    </main>
  );
};

export default Main;
