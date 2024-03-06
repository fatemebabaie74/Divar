import { sendOtp } from "services/Auth";
import styles from "../templates/SendOtp.module.css"



const SendOtp = ({setStep , mobile , setMobile}) => {


const submitHandler = async(event)=>{
    event.preventDefault();
  if(mobile.length !== 11) return

  const {response , error} = await sendOtp(mobile);
  console.log({response , error})


  if(response) setStep (2);
}



  return (
  <>
  <form onSubmit={submitHandler} className={styles.form}>
    <p>  ورود به حساب کاربری </p>
    <span>
    برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.
    </span>
    <label htmlFor='input'>شمارهٔ موبایل خود را وارد کنید</label>
    <input type="text" id='input' placeholder='شماره موبایل' value={mobile} onChange={e => setMobile(e.target.value)} />
    <button type='submit'>ارسال کد تایید</button>
  </form>
  
  </>
  )
}

export default SendOtp
