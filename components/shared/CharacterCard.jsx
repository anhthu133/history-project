import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CharacterCard = ({img,title,description}) => {
  return (
    <Link href='/characters/1'>
        <div className='w-72'>
            <Image src={img} width={500} height={500} alt='historical character' className='w-72 object-cover h-72  rounded-lg'/>
            <p className="text-xl mt-3 font-semibold text-slate-500">
                {title}
            </p>
            <p className="text-sm mt-3 font-normal text-slate-400 truncate">
                {description}
            </p>
        </div>
    </Link>
  )
}

export default CharacterCard