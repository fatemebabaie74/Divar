import { useState } from "react";
import styles from "./CategoryForm.module.css";
import { useMutation , useQueryClient } from "@tanstack/react-query";
import { addCategory } from "src/services/admin";

const CategoryForm = () => {
  const queryClient = useQueryClient()
const [form , setForm] = useState({name : "" , slug :"" , icon : ""});

const {mutate , isLoading , error , data} = useMutation(addCategory ,{
  onSuccess : () => queryClient.invalidateQueries("get-categories"),
})
console.log({isLoading , error , data})


const changeHandler = (event)=>{

setForm({...form, [event.target.name] : event.target.value} )
}

const submitHandler = (e) =>{
    e.preventDefault();
    if(!form.name || !form.slug || !form.icon) return;
    mutate(form)
}

  return (
   <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
    <h3>دسته بندی جدید</h3>
    {!!error && <p>مشکلی پیش آمده است</p>}
    {data?.status === 201 && <p>دسته بندی با موفقیت ثبت شد</p>  }
    <label htmlFor="name">اسم دسته بندی</label>
    <input type="text" id="name" name="name" />
    <label htmlFor="slug">اسلاگ</label>
    <input type="text" id="slug" name="slug" />
    <label htmlFor="icon">آیکون</label>
    <input type="text" id="icon" name="icon" />
    <button type="submit" disabled={isLoading}>ایجاد</button>
   </form>
  )
}

export default CategoryForm
