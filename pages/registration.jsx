import React, {useState} from 'react'
import RegForm from '@/Components/Authentication/registration';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { auth } from '@/utils/firebase';

const registration = () => {
    const [firmName, setFirmName] = useState("");
    const [brand, setBrand] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const handleReg = async () => {
      const userDetail = [
        auth.currentUser.displayName, auth.currentUser.photoURL, auth.currentUser.email, auth.currentUser.uid
      ];
      console.log(auth.currentUser);
      try {
          const res = await axios.post('/api/reg', {
              firmName, brand, email, address, mobile, userDetail
          });
          if (res.status === 200) {
              toast("Success")
          } else {
              toast("Error")
          }
      } catch (e) {
          console.log("Error in registration", e);
          // Handle error, show error message, etc.
      }
  }
  
    
  return (
    <>
        <RegForm 
        
            firmName = {firmName}
            brand = {brand}
            address = {address}
            mobile = {mobile}
            email = {email}
            setFirmName = {setFirmName}
            setBrand = {setBrand}
            setAddress = {setAddress}
            setMobile = {setMobile}
            setEmail={setEmail}
             
        />
        <div className='flex justify-center  text-white hover:cursor-pointer'>
          <button className='bg-black px-2 rounded-md' onClick={handleReg}>Submit</button>
        </div>
        <ToastContainer />
    </>
  )
}

export default registration;