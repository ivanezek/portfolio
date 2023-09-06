import React from 'react'
import './loading.css'
import { IoMdCode } from 'react-icons/io'


const loading = () => {
  return (
    <div className='loader'>
        <div className='loader-content'>
        <div className="lds-ring">
          <div></div><div></div><div></div><div></div>
        </div>
        </div>
    </div>
  )
}

export default loading