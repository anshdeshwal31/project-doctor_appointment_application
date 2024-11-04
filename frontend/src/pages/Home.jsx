import React from 'react'
import { NavLink } from 'react-router-dom'
import { doctors } from '../assets/frontendAssets/assets.js'
import { assets } from '../assets/frontendAssets/assets.js'

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

          <div className="buttonDiv flex">
              <button className=' rounded-full bg-white w-56'>Book appointment <img src="/src/assets/frontendAssets/arrow_icon.svg" alt="" /></button>
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
  return <NavLink to = "Doctor">
  <div><img src={imageAddress} alt="can't display this image " className='scale-75' /></div>
  <div className='text-center'>{bottomText}</div>
  </NavLink>
}





const DoctorCardComponent = ({imageAddress, doctorName , doctorType}) => {
    let doctorsArray = []
    for(let i = 0 ; i<10;i++){
      doctorsArray.push(
      <div key={doctors[i].id} className='flex flex-col items-center border border-b-slate-400 m-0 p-0 '>
        <img src= {doctors[i].image} alt="can't display this image" className='bg-gray w-[70%] rounded-t-xl m-0 p-0' />
        <div className='flex flex-col  items-center bg-white m-0 p-0' >
          <ul className='list-disc text-[13px] font-medium text-green-500  m-0 p-0'><li>Available</li></ul>
          <div className='font-semibold text-lg'>{doctors[i].name}</div>
          <div className='text-xs'>{doctors[i].speciality}</div>
        </div>
      </div>
      )
    }
    return (
      <div className='grid grid-cols-5 gap-y-8 p-0 m-0'>
        {doctorsArray}
      </div>
    )
}


const BottomComponent = () => {
  return( 
    <div className='flex justify-center'>
      <div className='justAboveFooter bg-blue flex justify-around w-[80vw]'>
        <div className='m-0 p-0 flex flex-col items-center'>
          <div className='text-5xl text-white font-semibold'>Book Appointment <br /> With Trusted 100+ Doctors</div>
          <div>
            <NavLink to="/CreateAccount"> <button className=' rounded-full w-44 h-10 bg-white'>Create account</button></NavLink>
          </div>
        </div>
        <div className='m-0 p-0'>
          <img src={assets.appointment_img} alt="can't display this image" className='w-[55%]'/>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <FirstComponent/>

      <div className='text-3xl text-center mt-12 mb-[20px] font-bold '>Find by Speciality</div> 
      <div className='text-center text-sm'>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.</div>

      <div className="doctorTypeSection flex justify-center my-8">
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/General_physician.svg" bottomText = "General Physician"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Gynecologist.svg" bottomText = "Gynecologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Dermatologist.svg" bottomText = "Dermatologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Pediatricians.svg" bottomText = "Pediatricians"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Neurologist.svg" bottomText = "Neurologist"/>
      <DoctorTypeComponent imageAddress = "/src/assets/frontendAssets/Gastroenterologist.svg" bottomText = "Gastroenterologist"/>
      </div>

      <div className="doctorsListSection mt-28 m-0 p-0">
        <div className='text-3xl text-center mb-7 font-bold'> Top Doctors to Book</div>
        <div className='text-s text-center mb-10'>Simply browse through our extensive list of trusted doctors.</div>
        <DoctorCardComponent/>
      </div>

      <div className='text-center mt-14 mb-20'>
        <button className='text-md bg-gray rounded-full w-32 h-10 text-slate-700'>more</button>
      </div>
 
        <BottomComponent/>
    </div>
  )
}


export default Home