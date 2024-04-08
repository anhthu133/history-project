import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { haiBaTrung } from '@/constant/characters'

const CV = () => {
  return (
    <>
        <div className="grid grid-cols-5 w-full gap-x-5 gap-y-5 max-w-[600px] mx-auto">
            <Image height={500} alt='historical character' className='w-full h-48 object-cover rounded-lg col-span-2' src='https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg' width={400}/>
            <div className='w-full col-span-3 p-3 bg-[#fefae0]'>
                <p className="text-3xl font-semibold text-[#d4a373]">
                    {haiBaTrung.ten}
                </p>
                <p className="text-md font-semibold text-cyan-400">
                    {haiBaTrung.ngaysinh}
                </p>
                <div>
                <p className="text-md mt-5 font-semibold text-slate-500">
                    Xuất thân
                </p> 
                <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
                <p className="text-xs text-slate-600 mt-3 font-normal line-clamp-1">
                    {haiBaTrung.xuatthan}
                </p> 
                </div>
            </div>
            <div className="col-span-2 p-3 rounded-lg h-fit bg-[#fefae0]">
                <p className='text-lg font-semibold text-[#d4a373] '>Chức vụ</p>
                <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
             <ul className='mt-5'>
               
               {haiBaTrung.chucvu.map(chucvu => <li key={Math.random()}>
                    <p className='text-slate-700 text-sm'> • {chucvu}</p>
                </li>)}
             </ul>
            </div>
            <div className="col-span-3 p-3 bg-[#ccd5ae] bg-opacity-20 rounded-lg">
                    <p className='text-lg font-semibold text-[#d4a373] '>Công trạng</p>
                    <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
                    <ul className='mt-3  flex flex-col gap-5'>
                       
                       {haiBaTrung.congtrang.map(
                        congtrang =>  <li key={congtrang.nam}>
                        <div className="flex items-start gap-5">
                            <p className="font-semibold text-xs text-slate-700 whitespace-nowrap">
                               {congtrang.nam}
                            </p>
                            <p className="font-normal text-xs text-slate-700">
                              {congtrang.noidung}
                            </p>
                        </div>
                    </li>
                       )}
                    </ul>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-3 p-3 bg-slate-100">
                <Link className='font-medium text-slate-700 underline' href={haiBaTrung.duonglinkvideo}>Xem video</Link>
                <Image src={haiBaTrung.duonglinkanh} width={500 } height={500} alt='map'/>
            </div>
        </div>
    </>
  )
}

export default CV