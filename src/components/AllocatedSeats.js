import React from 'react'

function AllocatedSeats({image}) {
  return (
    <div className={` h-44 bg-white ${!image?"w-cardWidth":" w-cardWidth2 "}  rounded-md pt-3 duration-700 relative drop-shadow-2xl `}>
        <div className=' flex '>
        <h1 className=" font-sans text-xl px-5">Allocated Seat</h1>
        </div>
        <div className=' flex justify-center mt-8 h-full '>
            <p>
            No seat has been allocated yet.
            </p>
        </div>

    </div>
  )
}

export default AllocatedSeats