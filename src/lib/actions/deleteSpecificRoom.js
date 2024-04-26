"use server"


const deleteSpecificRoom = async (id)=>{


  
    const settings = {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/rooms/${id}`, settings)
    const response = await query.json()

   return response;
    
  }

  export default deleteSpecificRoom;