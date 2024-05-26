import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image 
        src="/icons/sahan.jpg"
        width={32}
        height={32}
        alt='yoom logo'
        className='max-sm:size-10 rounded-full'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Sahan</p>
      </Link>
      <div className="flex-between gap-5 ">
      <SignedIn>
      <UserButton />
       </SignedIn>
      
      {/* <Link className='text-white font-extrabold' href=''>SignUp</Link>
      <Link className='text-white font-extrabold' href=''>SignIn</Link> */}
      
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
