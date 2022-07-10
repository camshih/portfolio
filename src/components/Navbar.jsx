import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-full h-20 bg-slate-200 fixed drop-shadow-lg'>
            <div className='px-8 flex justify-between items-center w-full h-full'>

                <div className='flex'>
                    <h1 className='text-3xl font-bold sm:text-4xl '><ul><li><a href=''>Cameron Shih</a></li></ul></h1>
                </div>

                <ul className='hidden md:flex pr-8'>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Resume</a></li>
                </ul>

                {/* Responsive Menu Icon */}
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-4'/> : <XIcon className='w-4'/>}
                </div>

            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute bg-slate-200 w-full px-8'}>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar