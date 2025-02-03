import React from 'react'
import { FaBars} from 'react-icons/fa'

const MainHeader = () => {
  return (
    <div className='bg-white flex justify-between items-center h-12 px-4 mb-4'>
      <div>Brand</div>
      <div>
        <FaBars className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default MainHeader
