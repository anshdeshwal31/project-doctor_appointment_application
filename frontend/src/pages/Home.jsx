import React from 'react'

const FirstComponent  = () => {
   return (
    <div className='flex justify-center'>
      <div className="outerMostDiv flex bg-blue items-center justify-center w-[80vw] h-[65vh] rounded-md">

        <div className="firstPart">

          <div className="biggerText text-white text-5xl">
            Book Appointment <br />with trusted doctors
          </div>

          <div className="smallertTextOuter  flex">

            <div className="smallerImage">
              <img src="/src/assets/frontendAssets/group_profiles.png" alt="can't load this image" />
            </div>

            <div className="smallerText text-white">
              Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free. 
            </div>

          </div>

          <div className="buttonDiv">
              <button className='border border-black'>Book appointment <img src="/src/assets/frontendAssets/arrow_icon.svg" alt="" /></button>
          </div>

        </div>
          {/* <div className="biggerImage flex flex-col items-end "> */}
          <img src="/src/assets/frontendAssets/header_img.png" alt = "can't load this image" className ='scale-75 ' />
          {/* //</div> */}
      </div>
    </div>
    )
}

const Home = () => {
  return (
    <div>
      <FirstComponent/>
      ansh
    </div>
  )
}

export default Home