import React from 'react'
import { auth } from '@/utils/firebase';

const home = () => {
  return (
    <>
    {auth ? (
      <>
        <div>
          <div>
            <p>Welcome Back </p>
          </div>
        </div>
      </>
    ) : (<>
          <div>
          <div>
            <p>Make</p>
          </div>
        </div>
    </>) }
        
    </>
  )
}

export default home;