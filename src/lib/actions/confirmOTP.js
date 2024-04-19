"use server"


const confirmOTP = async (phone,otp)=>{

    //check otp
    let num = phone.slice(-5);
    let num2 = parseInt(num);
    const date = new Date()
    let code = date.getDay()*num2
    code = code % 100000;
    
    if(code==otp){
        return { matched: true }
    }
    else{
        return { matched: false }
    }
  
  }

  export default confirmOTP;