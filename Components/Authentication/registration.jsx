import React from "react";
import Nav from "@/Components/Header/header";

const registration = ({
  firmName,
  brand,
  address,
  mobile,
  email,
  setFirmName,
  setBrand,
  setAddress,
  setMobile,
  setEmail,
}) => {
  return (
    <>
      <>
        <Nav />
        <div className="flex flex-col justify-center items-center gap-2 px-4 py-8">
          <div className="flex gap-8">
            <div className="group">
              <input
                type="text"
                className="input"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Firm Name</label>
            </div>
            <div className="group">
              <select
                type="text"
                className="input"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>Select Brand</option>
                <option>IOCL</option>
                <option>BPCL</option>
                <option>HPCL</option>
                <option>Jio</option>
                <option>Nayara</option>
              </select>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Brand</label>
            </div>
          </div>

          <div className="flex mt-8 gap-8">
            <div className="group">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Address</label>
            </div>
            <div className="group">
              <input
                type="number"
                className="input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Mobile</label>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="group">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="group">
              <span className="bar"></span>
              <label>Authenticate Google</label>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </>
    </>
  );
};

export default registration;
