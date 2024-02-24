import React, { useState, useEffect } from "react";

const date = ({ date, setDate }) => {
  const [editing, setEditing] = useState(false);
  const [inputDate, setInputDate] = useState("");

  const handleChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleSave = () => {
    setDate(inputDate);
    setEditing(false);
  };

  useEffect(() => {
    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
        const day = String(currentDate.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }
    
    const currentDate = getCurrentDate();
    setDate(currentDate);
}, [setDate]);


  return (
    <>
      <div>
        {editing ? (
          <input
            type="date"
            value={inputDate}
            onChange={handleChange}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
            <>
            
            <div className="flex gap-2">
            <p>Date -</p>
            <p>{date}</p>
            <button onClick={() => setEditing(true)} className="text-cyan-700">Change</button>
            </div>
                
            </>
          
        )}
      </div>
    </>
  );
};

export default date;
