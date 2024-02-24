import React, {useState, useEffect} from "react";
import { generalInfo } from "@/Constants/constants";
import Link from "next/link";
import { auth, googleProvider } from "@/utils/firebase";
import { signInWithPopup } from "@firebase/auth";



const header = () => {

   // ------------Handling google sign in ----------------
   const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      console.log(user);
     
   
    } catch (error) {
      console.error("error", error);
    }
  };

  

  return (
    <>
      <div className="h-16 w-auto bg-slate-950 flex justify-around items-center text-cyan-300">
        <div className=" p-2 px-5">
            <h2>{generalInfo.title}</h2>
        </div>
        <div className="justify-center items-center flex gap-2">
          {
            auth ? (<button onClick={signInWithGoogle}>Log out</button>) : (
              <button onClick={signInWithGoogle}>Log in</button>
            )
          }
        
            <Link href="/registration">Register</Link>
            <Link href="/createDSR">DSR</Link>
            <Link href="/ledgers">Ledgers</Link>
            
        </div>
      </div>
    </>
  );
};

export default header;
