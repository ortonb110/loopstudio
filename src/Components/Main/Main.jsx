import interactiveDesktop from '../../Assets/images/desktop/image-interactive.jpg';
import interactiveMobile from '../../Assets/images/mobile/image-interactive.jpg';


const Main = () => {
    return(
        <main>
           <article className="md:grid grid-cols-2 w-[90%] md:w-[80%] mx-auto mt-[9.6rem] md:mt-[16rem] mb-[18.4rem] h-[50rem]">
                <picture className='col-span-1'>
                    <source media='(min-width: 800px)' srcSet={interactiveDesktop}/>
                    <img src={interactiveMobile} alt="A person wearing a VR headset having fun" className=''/>
                </picture>
                <div className='col-span-1 md:relative'>
                    <div className='lg:absolute bottom-0 right-[42rem] bg-white p-[4.8rem] md:pt-[9.6rem] md:pl-[9.6rem] text-center md:text-start'>
                        <h2 className='uppercase text-[3.2rem] w-[27.9rem] md:w-fit mx-auto md:mx-0 md:text-[4.8rem] leading-[3.2rem] md:leading-[4.8rem] mb-[2.5rem]'>the leader in interactive vr</h2>
                        <p className='text-[1.5rem] font-["Alata"] text-darkGray leading-[2.5rem] md:leading-[2rem] w-[27.9rem] mx-auto md:mx-0 md:w-[44.5rem]'>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.
                            Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
           </article>
           <section>
                <h3>our creations</h3>
                
           </section>
        </main>
    )
}


export default Main;