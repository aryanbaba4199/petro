import React, { useState } from "react";
import Form from "./dsrform";
import Ledger from "./forms/ledger";
import { Dialog } from "@mui/material";
import Folio from "./forms/folio";
import { generalInfo } from "@/Constants/constants";

const dsr = () => {
  const [open, setOpen] = useState(false);

  const [reading, setReading] = useState([]);
  const [testing, setTesting] = useState([]);
  const [party, setParty] = useState("");
  const [slip, setSlip] = useState("");
  const [veh, setVeh] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <h2>Welcome back {generalInfo.title}</h2>
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
            <div className="flex flex-col justify-center gap-4 px-8 py-4">
              <p>Make an entry Carefully</p>
              <Ledger party={party} setParty={setParty} />
              <Folio slip={slip} setSlip={setSlip} veh={veh} setVeh={setVeh} />
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default dsr;
