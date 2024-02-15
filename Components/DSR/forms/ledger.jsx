import React, { useState } from "react";
import createLedger from "./createLedger"

const Ledger = () => {
  const [selectedParty, setSelectedParty] = useState("");
  const [open, setOpen] = useState(false);
  const partName = ["Ram", "Shyam"];

  const handlePartyChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParty(selectedValue);
    
    // Check if the selected value is "Create Ledger" and call the handler function
    if (selectedValue === "Create Ledger") {
        setOpen(true);
      
    }
  };

  

  return (
    <>
      <div>
        <label htmlFor="party">Select Party:</label>
        <select id="party" value={selectedParty} onChange={handlePartyChange}>
          <option value="">Select a party</option>
          {partName.map((party, index) => (
            <option key={index} value={party}>
              {party}
            </option>
          ))}
          <option value="Create Ledger">Create Ledger</option>
        </select>
      </div>
      {
        open && <Dialog open={open} setOpen={setOpen} />
      }
      
    </>
  );
};

export default Ledger;
