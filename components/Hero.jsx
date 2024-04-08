import React from 'react'
import CharacterGrid from './shared/CharacterGrid'
import CharacterCard from './shared/CharacterCard'

const Hero = () => {
  return (
    <div className=' gap-20 flex items-center justity-center'>
        <p className='font-semibold text-3xl text-slate-700'>Nhân vật lịch sử</p>
        <CharacterGrid>
            <CharacterCard img={'https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg'} title={'Hai Bà Trưng'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet.'}/>
            <CharacterCard img={'https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg'} title={'Trần Quốc Tuấn'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet.'}/>
            <CharacterCard img={'https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg'} title={'Hai Bà Trưng'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet.'}/>
            <CharacterCard img={'https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg'} title={'Hai Bà Trưng'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet.'}/>
            <CharacterCard img={'https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg'} title={'Hai Bà Trưng'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet.'}/>
        </CharacterGrid>
        
    </div>
  )
}

export default Hero