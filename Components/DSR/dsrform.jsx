import React, { useState } from "react";

const DsrForm = ({ readings, setReadings, testing, setTesting }) => {
  const f = 4;

  const handleReadingChange = (index, event) => {
    const newReadings = [...readings];
    newReadings[index] = event.target.value;
    setReadings(newReadings);
  };
  const handleTestingChange = (index, event) => {
    const newTesting = [...testing];
    newTesting[index] = event.target.value;
    setTesting(newTesting);
  };

  const renderInputFields = () => {
    let inputFields = [];
    for (let i = 0; i < f; i++) {
      inputFields.push(
        <div key={i} className="flex gap-4 px-1 mt-6 justify-center items-center">
          <div className="group">
            <input
              type="number"
              className="input"
              value={readings[i] || ""}
              onChange={(e) => handleReadingChange(i, e)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{`Reading ${i + 1}`}</label>
          </div>

          <div className="group">
            <input
              type="text"
              className="input"
              value={testing[i] || ""}
              onChange={(e) => handleTestingChange(i, e)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{`Testing ${i + 1}`}</label>
          </div>
        </div>
      );
    }
    return inputFields;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Readings:", readings, testing);
    // You can handle the submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderInputFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DsrForm;
