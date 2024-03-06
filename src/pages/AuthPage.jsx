import React, { useState } from 'react'
import SendOtp from 'componets/templates/SendOtp'
import CheckOtp from 'componets/templates/CheckOtp'

const AuthPage = () => {

const [step , setStep] = useState(1);
const [mobile , setMobile] = useState("");
const [code , setCode] = useState("");

  return (
    <div>
        {step === 1 && (<SendOtp setStep={setStep} mobile={mobile} setMobile={setMobile}/>)}
        {step === 2 && (<CheckOtp code={code} setCode={setCode} mobile={mobile} setStep={setStep}/>)}
      
      
    </div>
  )
}

export default AuthPage
