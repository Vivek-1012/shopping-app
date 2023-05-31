import React from 'react'

const ProfilePage = () => {
  
  const getData = async() => {
    try{
      const creds = {
        email: "adarshbalika@gmail.com",
        password:"adarshbalika"
      }

     const responce = await fetch("/api/auth/login",{
     method:"POST",
     body: JSON.stringify(creds) 
     })

     const {encodedToken} = await responce.json();
     

     localStorage.setItem("encodedToken",encodedToken)
      
     console.log(localStorage.getItem("encodedToken"))
    }
    catch(e){
       console.error(e);
    }
  } 
  return (
    <div onClick={()=>getData()}>
      click
    </div>
  )
}

export default ProfilePage
