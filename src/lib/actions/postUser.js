"use server"


const postUser = async (formData,image)=>{

    let details = {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        study: formData.study,
        document: image
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.DOMAIN}/api/users`, settings)
    const response = await query.json()
  
    return response
  }

  export default postUser;