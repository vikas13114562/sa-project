import React from 'react'
import './AfterOwnerLogin.css'

export default function SmallCard(props) {
  return (
    <div className='small-card'>
        <div className='text'>{props.text}</div>
        <div className='number'>{props.num}</div>
    </div>
  )
}
