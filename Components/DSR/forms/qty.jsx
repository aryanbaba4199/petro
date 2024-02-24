import React from "react";

const qty = ({
    qty, setQty, rate, setRate, amount, setAmount
}) => {
  return (
    <>
      <div className="flex gap-2 mt-4">
        <div className="group">
          <input
            type="text"
            className="input"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Quantity</label>
        </div>
        <div className="group">
          <input
            type="text"
            className="input"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Rate</label>
        </div>
        <div className="group">
          <input
            type="text"
            className="input"
            value={rate*qty}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Amount</label>
        </div>
      </div>
    </>
  );
};

export default qty;
