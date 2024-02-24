import React from "react";

const product = ({ prod, setProd, unit, setUnit }) => {
  return (
    <>
      <div className="flex mt-2">
        <div className="group">
          <select
            type="text"
            className="input"
            value={prod}
            onChange={(e) => setProd(e.target.value)}
          >
            <option>Select a Product</option>
            <option value="MS">MS</option>
            <option value="HS">HS</option>
            <option value="Lubricant">Lubricant</option>
          </select>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Product</label>
        </div>
        <div className="group">
          <select
            type="text"
            className="input"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option>Select Unit</option>
            <option value="Ltr">Ltr</option>
            <option value="Kg">Kg</option>
            <option value="Pckt">Pckt</option>
          </select>

          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Unit</label>
        </div>
      </div>
    </>
  );
};

export default product;
