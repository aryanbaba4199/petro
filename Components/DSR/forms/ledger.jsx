import React, { useState } from "react";
import CreateLedger from "./createLedger"

const Ledger = ({party, setParty}) => {
  
  const [open, setOpen] = useState(false);
  const partName = ["Ram", "Shyam"];

  const handlePartyChange = (event) => {
    const selectedValue = event.target.value;
    setParty(selectedValue);
    
    // Check if the selected value is "Create Ledger" and call the handler function
    if (selectedValue === "Create Ledger") {
        setOpen(true);
    }
  };

  

  return (
    <>
      <div>
        <label htmlFor="party">Select Party:</label>
        <select id="party" value={party} onChange={handlePartyChange}>
          <option value="">Select a party</option>
          {partName.map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
          <option value="Create Ledger">Create Ledger</option>
        </select>
      </div>
      <CreateLedger
        open = {open}
        setOpen={setOpen}
      />
      
    </>
  );
};

export default Ledger;
