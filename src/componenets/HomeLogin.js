import React from 'react'
import './HomeLogin.css'
import Nav from './Nav'
import { FcBusinessman } from "react-icons/fc";

export default function HomeLogin(props) {
  return (
    <>
        <Nav />
        <div className='home-container'>
            <div className='card'>
                <h2 className='home-text'>Hello there,</h2>
                <div className='icon'>
                    <FcBusinessman />
                </div>
                <button className='home-btn' onClick = {props.handleOwnerLogin}>Owner</button>
                <button className='home-btn' onClick = {props.handleEmployeeLogin}>Employee</button>
            </div>
        </div>
    </>
  )
}
