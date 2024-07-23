import React, { useState } from 'react';
import './hero.css';
import Fb from '../../assets/fb.png';
import Insta from '../../assets/insta.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Resume from '../../assets/Resume.pdf'
import toast from 'react-hot-toast';
import { Link } from 'react-scroll'

const Hero = () => {
    const [count, setCount] = useState(0);
    const handleToast = () => {
        setCount(count + 1)

        if (count === 1) {
            toast.success('Download Successfully')
        }

        else {
            toast('The file is Already Downloaded')
        }
    }
    return (
        <div className='hero'>
            <Link smooth={true} to='contact'><div className="hire">Hire Me</div></Link>
            <div className="heroMain">
                <div className="heroLeft">
                    <div className="link">
                        {[
                            { name: 'Github', img: Github, width: '100%',url:'https://github.com/CodeWithPsych' },
                            { name: 'LinkedIn', img: Linkedin, width: '55%',url:'https://www.linkedin.com/in/arham-saleem-91079b283/'  },
                            { name: 'Facebook', img: Fb, width: '90%',url:'https://www.instagram.com/mr_._psych/'  },
                            { name: 'Instagram', img: Insta, width: '70%',url:'https://www.instagram.com/mr_._psych/'  },
                        ].map(({ name, img, width,url }) => (
                            <div className="links" key={name}>
                                <a href={url} target='blank'>
                                    <div className="linkImg">
                                        <img src={img} style={{ width, filter: 'none' }} alt={name.toLowerCase()} />
                                    </div>
                                </a>
                                <a href={url} target='blank'>
                                    <div className={`linkName`}>
                                        {name}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="heroRight">
                    <div className="heroTxt">
                        <div>Welcome to My Site!</div>
                        <div>Where Your Web Apps,</div>
                        <div>Reimagined with Excellence.</div>
                    </div>
                    <a href={Resume} download onClick={() => handleToast()}>
                        <div className='cv'>
                            <div id="my_wrap">
                                <div className="btn-slide">
                                    <span className="circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />
                                        </svg>
                                    </span>
                                    <span className="title">Download Resume</span>
                                    <span className="title-hover">Download Now</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;