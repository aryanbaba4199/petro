import React, { useState } from "react";
import { Dialog } from "@mui/material";

const createLedger = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("");

  const handleCloase = () => {
    setOpen(false);
  };
  const handleCreate = ()=>{
    console.log(name, address, mobile, type);
  }

  const vType = ["Credit", "Debit", "Expense"];

  return (
    <Dialog open={open} onClose={handleCloase}>
      
        <div className="px-12 py-4 flex flex-col justify-evenly gap-2">
          <div className="flex justify-evenly  gap-2">
            <label>Enter Party Name </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black text-center"
              placeholder="Party name"
              type="text"
            />
          </div>
          <div className="flex justify-between gap-2">
            <label>Enter Address Name </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-2 border-black text-center"
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="flex justify-between  gap-2">
            <label>Enter Mobile No. </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border-2 border-black text-center"
              placeholder="Address"
              type="number"
            />
          </div>
          <div className="flex justify-between  gap-2">
            <label>Select Type:</label>
            <select
              value={type}
              onChange={(e)=>setType(e.target.value)}
              className="border-2 border-black text-center"
            >
              <option value="">Select Type</option>
              {vType.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleCreate} className="btn bg-black text-fuchsia-100 px-2 rounded-sm">Create</button>
          </div>
        </div>
      
    </Dialog>
  );
};

export default createLedger;
