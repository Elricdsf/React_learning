import home1 from '../img/home1.png'

const AboutSection = ()=>{
    return(
        <div>
            <div className='title'>
                <h2>We work to make</h2>
                <h>your <span>dreams</span> come</h1>
                <h2>true.</h2>
                <div className='contact'>
                    <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                    <button>Contact Us</button>
                </div>
                <div className='manWithCamera'>
                    <img src={home1} alt='man with camera'/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;