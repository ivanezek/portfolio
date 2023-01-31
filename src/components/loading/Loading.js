import React from 'react'
import './loading.css'
import { IoMdCode } from 'react-icons/io'


const loading = () => {
  return (
    <div className='loader'>
        <div className='loader-content'>
            <h2>IVÁN ROSALES</h2>
            <span> 
                <IoMdCode/>
            </span>
        </div>
    </div>
  )
}

export default loading