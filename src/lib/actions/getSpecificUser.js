"use server"


const getSpecificUserOTP = async (phone)=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/users/${phone}`, settings)
    const response = await query.json()
    console.log(response.data)

    if(response.data==null){
        return { found: false }
    }else{
        //send otp
        let num = response.data.phone.slice(-5);
        let num2 = parseInt(num);
        const date = new Date()
        let code = date.getDay()*num2
        code = code % 100000;
        if(code<9999){
            console.log("0"+code.toString());
        }else{
            console.log(code.toString());
        }
        return { found: true, userID: response.data._id }
    }
  
    
  }

  export default getSpecificUserOTP;