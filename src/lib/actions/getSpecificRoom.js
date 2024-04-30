"use server"


const getSpecificRoom = async (id)=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/rooms/${id}`, settings)
    const response = await query.json()

   return response;
    
  }

  export default getSpecificRoom;