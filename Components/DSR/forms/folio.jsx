import React from "react";

const folio = ({ slip, setSlip, veh, setVeh }) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="group">
          <input
            type="text"
            className="input"
            value={slip}
            onChange={(e) => setSlip(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Slip No.</label>
        </div>
        <div className="group">
          <input
            required=""
            type="text"
            className="input"
            value={veh}
            onChange={(e) => setVeh(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Vehicle No.</label>
        </div>
      </div>
    </>
  );
};

export default folio;
