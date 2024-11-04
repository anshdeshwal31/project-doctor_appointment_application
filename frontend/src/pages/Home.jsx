import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <img src="/src/assets/frontendAssets/header_img.png" alt = "can't load this image" className ='scale-75' />
          {/* //</div> */}
      </div>
    </div>
    )
}


const DoctorTypeComponent = ({imageAddress, bottomText}) => {
  return <NavLink>

  <div><img src={imageAddress} alt="can't display this image " className='scale-75' /></div>
  <p>{bottomText}</p>
  </NavLink>
}
const SecondComponent = () => {
  
}


const Home = () => {
  return (
    <div>
      <FirstComponent/>
      <div className="doctorTypeSection flex justify-center my-8">
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/General_physician.svg" bottomText = "General Physician"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Gynecologist.svg" bottomText = "Gynecologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Dermatologist.svg" bottomText = "Dermatologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Pediatricians.svg" bottomText = "Pediatricians"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Neurologist.svg" bottomText = "Neurologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Gastroenterologist.svg" bottomText = "Gastroenterologist"/>
      </div>
    </div>
  )
}

export default Home