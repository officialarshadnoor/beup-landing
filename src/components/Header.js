import React, {useState} from 'react';

import Logo from '../assets/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons 
import {FaBars} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' 
        data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[120px]'>
                    {/*logo */}
                    <a href="#">
                        <img src={Logo} alt="BeUP" width="100px"/>
                    </a>
                    {/*Nav initially hidden - only show on large screen */}
                    <div className='hidden lg:flex'>
                        <Nav></Nav>
                    </div>
                    </div>
                    {/* Mobile Nav - Initially is showing hidden on large screen */ }
                    <div className={`${navMobile ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
                    <NavMobile></NavMobile>
                    </div>

                    {/* Button */ }
                    <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
                        Get Connected <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition'/>
                    </button>
                    {/* Nav trigger button - only shows on mobile view */ }
                    <div onClick={() => setNavMobile (!navMobile)}
                        className='lg:hidden text-2xl text-primary cursor-pointer'>
                        <FaBars />
                    </div>



                </div>
            </div>
        </header>

    );
}

export default Header;