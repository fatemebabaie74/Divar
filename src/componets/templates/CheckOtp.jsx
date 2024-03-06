import { useQuery } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { checkOtp } from 'services/Auth';
import { getProfile } from 'services/User';
import { setCookies } from 'utils/cookie';
import styles from "../templates/CheckOtp.module.css"

const CheckOtp = ({setStep ,code , setCode, mobile}) => {

  const navigate = useNavigate();

  const {refetch} = useQuery(["profile"] ,getProfile)

  const submitHandler =async (event)=>{
    event.preventDefault();
  
   if(code.length !== 5) return;



   const {response , error} =await checkOtp(mobile , code)
   if(response){
    
    setCookies(response.data)
    navigate("/")
    refetch();
   };
   if(error){
    console.log(error.response.data.message)
   }
  }
  return (
   <form onSubmit={submitHandler} className={styles.form}>
    <p>کد تأیید را وارد کنید</p>
    <span>کد پیامک‌شده به شمارۀ «{mobile}» را وارد کنید.</span>
    <label htmlFor='input'>کد تأیید را وارد کنید</label>
    <input type='text' id='input' placeholder='کد تایید' value={code} onChange={e =>setCode(e.target.value)}/>
    <button type='submit'>ورود</button>
    <button onClick={()=>setStep(1)} className={styles.backbutton}>تغییر شمارهٔ موبایل</button>
   </form>
  )
}

export default CheckOtp
