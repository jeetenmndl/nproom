"use server"


const postRoom = async (formData, imagesArray, userID)=>{

    let details = {
        belongsTo: userID,
        city: formData.city,
        area: formData.area,
        neighbourhood: formData.neighbourhood,
        owner: formData.owner,
        contact: formData.contact,
        rent: formData.rent,
        rentType: formData.rentType,
        facilities: {
            wifi: formData.wifi,
            parking: formData.parking,
            electricity: formData.electricity,
            water: formData.water,
            terrace: formData.terrace,
            furnished: formData.furnished,
        },
        rooms: {
            type: formData.type,
            bathroom: formData.bathroom,
            roomSize: formData.roomSize,
            bedroom: formData.bedroom,
            kitchen: formData.kitchen,
            hall: formData.hall,
        },
        description: formData.description,
        rules: formData.rules,
        disclosure: formData.disclosure,
        photos: imagesArray
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/rooms`, settings)
    const response = await query.json()
  
    return response
  }

  export default postRoom;