import React from 'react'

const description = ({desc, setDesc}) => {
  return (
    <>
        <div className="group mt-2">
          <input
            type="text"
            className="input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Description</label>
        </div>
    </>
  )
}

export default description; 