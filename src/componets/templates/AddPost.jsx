import React, { useState } from 'react'
import styles from "./AddPost.module.css"
import { useQuery } from '@tanstack/react-query'
import { getCategory } from 'src/services/admin'
import { getCookie } from 'src/utils/cookie'
import axios from 'axios'
import toast from 'react-hot-toast'
const AddPost = () => {
    

  const [form , setForm] = useState({
title:"",
content:"",
amount:null,
city:"",
category:"",
images:null,

  });


    const { data} = useQuery(["get-categories"] , getCategory )
    // console.log( data) 
    

const changeHandler =(event)=>{
 const name = event.target.name 
 if(name !== "images"){
  setForm({...form ,[name] : event.target.value });
 }
  else{
setForm({...form ,[name] : event.target.files[0]})
  
  }

}

    const addHandler = (e) =>{ 
      e.preventDefault();

      const formData = new FormData();
      
      for(let i in form){
        formData.append (i , form[i])  }
     const token = getCookie("accessToken");

     axios.post(`${import.meta.env.VITE_BASE_URL}post/create` , formData , {headers:{
      "Content-Type" : "multipart/form-data" , 
      Authorization : `bearer ${token}`
     }}

     ).then(res =>toast.success(res.data.message))
     .catch(error=>toast.error("مشکلی پیش آمده است"))

    }


  return (
    <div>
      <form onChange={changeHandler} className={styles.form}>
        <h3>افزودن آگهی</h3>
        <label htmlFor="title">عنوان</label>
        <input type="text" name='title' id='titlle' />
        <label htmlFor="content">توضیحات</label>
        <textarea name="content" id="content" />
        <label htmlFor="amount">قیمت</label>
        <input type="number" name='amount' id='amount' />
        <label htmlFor="city">شهر</label>
        <input type="text" name='city' id='city' />
        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
          {
            data?.data.map(i=><option key={i._id} value={i._id}>{i.name}</option>)
          }
        </select>
        <label htmlFor="images">عکس</label>
        <input type="file" name='images' id='images' />
        <button onClick={addHandler}>افزودن</button>
       
      </form>
    </div>
  )
}

export default AddPost
