import React, { useState } from "react";
import RegForm from "@/Components/Authentication/registration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { auth } from "@/utils/firebase";
import { Dialog } from "@mui/material";
import { useRouter } from "next/router";


const registration = () => {

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [hsOpen, setHsOpen] = useState(false);

  const [firmName, setFirmName] = useState("");
  const [brand, setBrand] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [msTotCount, setmstotCount] = useState("");
  const [hsTotCount, sethstotCount] = useState("");
  const [msStock, setMsstock] = useState("");
  const [hsStock, setHsStock] = useState("");
  const [msReading, setMsReading] = useState([]);
  const [hsReading, setHsReading] = useState([]);
  
  
  const handleReg = () => {
       setOpen(true);
  };


  const handleMSSubmit = () => {
    console.log(msReading);
    setHsOpen(true);
  };

  const handleHsSubmit = () => {
    handleSubmit();
    setHsOpen(false);
    setOpen(false);
  };

  const handleSubmit = async () => {
      
    

    const userDetail = [
      auth?.currentUser?.displayName,
      auth?.currentUser?.photoURL,
      auth?.currentUser?.email,
      auth?.currentUser?.uid,
    ];

    try {
      const res = await axios.post("/api/reg", {
        firmName,
        brand,
        email,
        address,
        mobile,
        userDetail,
        msReading,
        hsReading,
        msStock,
        hsStock
      });
      if (res.status === 200) {
        toast("Success");
        router.push("/")
      } else {
        toast("Error");
      }
    } catch (e) {
      console.log("Error in registration", e);
    }
  };


  

  return (
    <>
      <RegForm
        firmName={firmName}
        brand={brand}
        address={address}
        mobile={mobile}
        email={email}
        setFirmName={setFirmName}
        setBrand={setBrand}
        setAddress={setAddress}
        setMobile={setMobile}
        setEmail={setEmail}
        msTotCount={msTotCount}
        setmstotCount={setmstotCount}
        hsTotCount={hsTotCount}
        sethstotCount={sethstotCount}
        msStock={msStock}
        setMsstock={setMsstock}
        hsStock={hsStock}
        setHsStock={setHsStock}
      />
      <div className="flex justify-center  text-white hover:cursor-pointer">
        <button className="bg-black px-2 rounded-md" onClick={handleReg}>
          Submit
        </button>
      </div>
      <Dialog open={open} >
        <div className="dialog-content px-8 py-2">
          <h2>Enter MS Totalizer Readings</h2>
          {Array.from({ length: msTotCount }, (_, i) => i + 1).map((index) => (
            <div className="group mt-8" key={index}>
              <input
                type="number"
                className="input"
                value={msReading[index] || ""}
                onChange={(e) => setMsReading((prevState) => ({ ...prevState, [index]: e.target.value }))}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>{`Reading ${index}`}</label>
            </div>
          ))}
          <div className="flex justify-center mt-4 gap-4">
          <button className="bg-red-600 px-2 rounded-md text-white" onClick={(e)=>setOpen(false)}>Cancel</button>
            <button className="bg-green-600 px-2 rounded-md text-white" onClick={handleMSSubmit}>
              Submit
            </button>
            
          </div>
        </div>
      </Dialog> 

      <Dialog open={hsOpen}>
        <div className="dialog-content px-8 py-2">
          <h2>Enter HS Totalizer Readings</h2>
          {Array.from({ length: msTotCount }, (_, i) => i + 1).map((index) => (
            <div className="group mt-8" key={index}>
              <input
                type="number"
                className="input"
                value={hsReading[index] || ""}
                onChange={(e) => setHsReading((prevState) => ({ ...prevState, [index]: e.target.value }))}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>{`Reading ${index}`}</label>
            </div>
          ))}
          <div className="flex justify-center mt-4 gap-4">
          <button className="bg-red-600 px-2 rounded-md text-white" onClick={(e)=>setOpen(false)}>Cancel</button>
            <button className="bg-green-600 px-2 rounded-md text-white" onClick={handleHsSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Dialog>
      
      
      <ToastContainer />
    </>
  );
};

export default registration;
