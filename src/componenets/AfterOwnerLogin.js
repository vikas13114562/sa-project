import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import './AfterOwnerLogin.css'
import SmallCard from './SmallCard'
import { FcSynchronize } from "react-icons/fc";

export default function AfterOwnerLogin() {

  let obj = {
    quantity:"",
    petrol:"",
    diesel:"",
  }


    const [formData, setFormData] = useState(obj)
    const [isSubmit, setIsSubmit] = useState(false)
    const [num, setNum] = useState(0)

    useEffect(() => {
      let data = localStorage.getItem("MyData")

      if(data) {
        let temp = JSON.parse(data).quantity
        setNum(temp)
      }
      
    },[isSubmit])

    function handleFormData(e) {
      const {name, value} = e.target
      setFormData(prev => {
        return {...prev, [name]: value}
      })
      
    }

    function handleSubmit() {
      localStorage.setItem("MyData",JSON.stringify(formData))
      setFormData(obj)
      setIsSubmit(prev => (!prev))
      localStorage.setItem("onlineCollection",0)
      localStorage.setItem("offlineCollection",0)
    }

    function onRefresh() {
      let data = localStorage.getItem("MyData")

      if(data) {
        let temp = JSON.parse(data).quantity
        setNum(temp)
      }
    }

  return (
    <>
        <Nav />
        <div className='main'>
          <div className='refresh'>
          <div className='content'>
              <SmallCard text = "Today's left Quantity" num = {num} />
              <SmallCard text = "Today's collection online" />
              <SmallCard text = "Today's collection offline"  />
          </div>
          <div className='refresh-div' onClick={onRefresh}><FcSynchronize /></div>
          </div>
          <div className='form-data'>
              <div className='form-input'>
                <label htmlFor='quantity'>Enter Today's Quantity :</label>
                <input id='quantity' type="text" name = "quantity" 
                  value={formData.quantity} onChange = {handleFormData} />
              </div>
              <div className='form-input'>
                <label htmlFor='diesel'>Enter Today's Diesel Price :</label>
                <input id='diesel' type="text" name = "diesel" 
                  value={formData.diesel} onChange = {handleFormData} />
              </div>
              <div className='form-input'>
                <label htmlFor='petrol'>Enter Today's Petrol Price :</label>
                <input id='petrol' type="text" name = "petrol" 
                  value={formData.petrol} onChange = {handleFormData} />
              </div>
              <button className='form-btn' onClick={handleSubmit} >Submit</button>
          </div>
        </div>
    </>
  )
}
