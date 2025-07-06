import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 py-3 mt-20 pb-10 max-sm:flex-col'>
        <img className='max-sm:hidden' src={assets.logo} alt="" width={150} />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm max-sm:border-0 max-sm:text-center text-gray-500'>Copyright @CoderGuyShubham | All rights reserved.</p>
        <div className='flex gap-2.5'>
            <a href="https://www.github.com/CoderGuyShubham" target="_blank" rel="noopener noreferrer">
              <img className='grayscale hover:grayscale-0 transition duration-300' src={assets.github_icon} alt="LinkedIn" width={35} />
            </a>
            <a href="https://www.linkedin.com/in/shubhamsingh1785" target="_blank" rel="noopener noreferrer">
              <img className='grayscale hover:grayscale-0 transition duration-300' src={assets.linkedin_icon} alt="" width={35} />
            </a>
        </div>
    </div>
  )
}

export default Footer