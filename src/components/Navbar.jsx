import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick =() => setNav(!nav)
    return (
        <div className='w-full h-20 bg-slate-200 fixed drop-shadow-lg'>
            <div className='px-8 flex justify-between items-center w-full h-full'>
            
                <div className='flex'>
                    <h1 className='text-3xl font-bold sm:text-4xl'>Cameron Shih</h1>
                </div>

                <ul className='hidden md:flex pr-20'>
                    <li>Projects</li>
                    <li>Resume</li>
                </ul>

                {/* Responsive Menu Icon */}
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-6'/> : <XIcon className='w-6'/>}
                </div>

            </div>

            {/* Responsive Menu */}
            <ul className={!nav ? 'hidden' : 'absolute bg-slate-200 w-full px-12'}>
                <li>Projects</li>
                <li>Resume</li>
            </ul>
        </div>
    )
}

export default Navbar