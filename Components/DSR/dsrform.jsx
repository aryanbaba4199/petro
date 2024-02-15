import React, { useState } from 'react';

const DsrForm = ({readings, setReadings, testing, setTesting}) => {
  
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
        <div key={i} className='flex'>
          <div className='flex px-2 mt-1'>
            <p>Enter Your</p>
            <p className='bg-cyan-950 w-5 h-5 text-center self-center mb-2 mx-1 text-white rounded-full'>{i}</p>
            <p>Totalizer Reading</p>
          </div>
          <input
            type="number"
            value={readings[i] || ''}
            
            onChange={(e) => handleReadingChange(i, e)}
            placeholder={`Reading ${i + 1}`}
            className='border-2 border-black hover:border-green-400 text-center my-2'
          />
          <label className='pl-4 mt-1 px-1'>Testing</label>
          <input
            type="number"
            value={testing[i] || ''}
            
            onChange={(e) => handleTestingChange(i, e)}
            placeholder={`Testing ${i + 1}`}
            className='border-2 border-black hover:border-green-400 text-center my-2'
          />

          
        </div>
      );
    }
    return inputFields;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Readings:', readings);
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
