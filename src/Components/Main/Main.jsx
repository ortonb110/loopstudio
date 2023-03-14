import interactiveDesktop from '../../Assets/images/desktop/image-interactive.jpg';
import interactiveMobile from '../../Assets/images/mobile/image-interactive.jpg';


const Main = () => {
    return(
        <main>
           <article className="grid grid-cols-3 ">
                <picture className='col-span-2'>
                    <source media='(min-width: 800px)' srcSet={interactiveDesktop}/>
                    <img src={interactiveMobile} alt="A person wearing a VR headset having fun" className=''/>
                </picture>
                <div className='col-span-1'>
                    <div>
                        <h2>the leader in interactive vr</h2>
                        <p>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the companies around the globe.
                            Our award-winning creatins have transformed businesses through digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
           </article>
        </main>
    )
}


export default Main;