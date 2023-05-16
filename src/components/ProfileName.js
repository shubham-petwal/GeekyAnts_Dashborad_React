import React, { useState } from 'react'

function ProfileName({name,index}) {
    const[clicked,setClicked] = useState(false)
  return (
    <div tabIndex={index} className={`${clicked? "bg-red-600":""}`} onClick={()=>setClicked(!clicked)} onBlur={()=>setClicked(false)}>
        <h1>
            {name}
        </h1>
    </div>
  )
}

export default ProfileName