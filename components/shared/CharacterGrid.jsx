import React from 'react'

const CharacterGrid = ({children}) => {
  return (
    <div className='grid grid-cols-3 gap-5'>{children}</div>
  )
}

export default CharacterGrid