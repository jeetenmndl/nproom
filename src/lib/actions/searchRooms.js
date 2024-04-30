"use server"


const searchRooms = async (searchParams)=>{

// console.log("search params", searchParams)
  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchParams)
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/search`, settings, {cache: 'no-store'})
    const response = await query.json()
  
    return response
  }

  export default searchRooms;