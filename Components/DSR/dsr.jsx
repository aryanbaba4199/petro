import React, { useState } from "react";
import Nav from "@/Components/Header/header"
import Form from "./dsrform";
import Ledger from "./forms/ledger";
import { Dialog } from "@mui/material";
import Folio from "./forms/folio";
import { generalInfo } from "@/Constants/constants";
import Description from "./forms/description";
import Qra from "./forms/qty";
import Product from "./forms/product";
import Date from "./forms/date";

const dsr = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [reading, setReading] = useState([]);
  const [testing, setTesting] = useState([]);
  const [party, setParty] = useState("");
  const [slip, setSlip] = useState("");
  const [veh, setVeh] = useState("");
  const [desc, setDesc] = useState("");
  const [prod, setProd] = useState("");
  const [unit, setUnit] = useState("");
  const [rate, setRate] = useState("");
  const [qty, setQty] = useState("");
  const [amount, setAmount] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const formSubmit = () => {
    console.log("reading", reading,
    "testing", testing,
    "Party", party,
    "Slip", slip,
    "Veh", veh,
    "description", desc,
    "prod", prod,
    "unit", unit,
    "rate", rate,
    "qty", qty,
    "amount", amount
    );
  };

  return (
    <>
    <Nav/>
      <div className="flex flex-col  px-8 py-4 justify-center items-center">
        <div>
        <h2 className="text-lg">Welcome back {generalInfo.title}</h2>
        <p>Create Your DSR Carefully</p>
        </div>
        <div className="flex justify-end w-auto">
          <Date date={date} setDate={setDate}/>
        </div>
        <Form
          readings={reading}
          setReadings={setReading}
          testing={testing}
          setTesting={setTesting}
        />
        <div className="">
          <button onClick={(e) => setOpen(true)}>Create a Voucer Entry</button>
          //have to show entried voucher
          <Dialog anchor="center" open={open} onClose={handleClose}>
            <div className="flex flex-col justify-center gap-4 px-8 py-8">
              <p>Make an entry Carefully</p>
              
              <Ledger party={party} setParty={setParty} />
              <Folio slip={slip} setSlip={setSlip} veh={veh} setVeh={setVeh} />
              <Description desc = {desc} setDesc={setDesc}/>
              <Product prod = {prod} setProd={setProd}  unit={unit} setUnit={setUnit} />
              <Qra 
                qty = {qty}
                setQty={setQty}
                rate = {rate}
                setRate = {setRate}
                amount={amount}
                setAmount={setAmount}
              />
              
            </div>
            <div className="flex justify-center items-center py-4">
              <button onClick={formSubmit} className="bg-black text-white px-2 rounded-md">Submit</button>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default dsr;
