import React, { useState } from 'react'
import Form from "./dsrform"
import Ledger from './forms/ledger'
import { generalInfo } from '@/Constants/constants'

const dsr = () => {
    const [reading, setReading] = useState([]);
    const [testing, setTesting] = useState([]);
  return (
    <>
        <div>
            <h2>Welcome back {generalInfo.title}</h2>
            <Form 
            readings={reading} 
            setReadings={setReading} 
            testing = {testing}
            setTesting={setTesting}
            />
            <Ledger/>
        </div>
    </>
  )
}

export default dsr;