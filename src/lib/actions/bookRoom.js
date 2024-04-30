"use server"


const bookRoom = async (room, userID)=>{


  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  
  try{
    const query = await fetch(`${process.env.DOMAIN}/api/users/${userID}`, settings)
    const response = await query.json()

    let user = response.data;

    let message = `Dear ${user.name}, Your made a booking for ${room.rooms.type} at ${room.area}, ${room.neighbourhood}, ${room.city}. The price is Rs ${room.rent} /month(${room.rentType}). Contact ${room.contact}(${room.owner}) to confirm or visit place.`

    // send sms using user.phone and message 
    // console.log(message);

    return {success: true}
  }
  catch(error){
    return { success: false}
  }

  }

  export default bookRoom;