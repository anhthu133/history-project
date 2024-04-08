import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex p-5 items-center justify-between
    '>
        <h1>CVLS</h1>
        <ul className='flex items-center gap-5'>
            <li className='hover:underline'>
                <Link href={'#'}>Trang chủ</Link>
               
               
            </li>
            <li className='hover:underline'>
            <Link href={'#'}>Nhân vật </Link>
              
               
               
            </li>
            <li className='hover:underline'>
            <Link href={'#'}>Sự kiện </Link>
              
               
               
            </li>
        </ul>
    </nav>
  )
}

export default Navbar