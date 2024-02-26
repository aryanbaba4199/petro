import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GenInfoContext } from "@/pages/_app";
import { auth, googleProvider } from "@/utils/firebase";
import { signInWithPopup, signOut } from "@firebase/auth";

const header = () => {
  const router = useRouter();
  const genInfo = useContext(GenInfoContext);
  console.log(genInfo);

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

  // ------------Handling Sign Out --------------------
  const signOutHandler = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
    } catch (err) {
      console.log("Error:", err);
    }
  };

  // handling registration
  const regHandler = () => {
    router.push("/registration");
  };

  return (
    <>
      <div className="h-16 w-auto bg-slate-950 flex justify-around items-center text-cyan-300">
        <div className=" p-2 px-5">
          {genInfo[0]?.firmName ? (
            <>
              <Link href="/">{genInfo[0].firmName}</Link>
              <p>{genInfo[0]?.address}</p>
              <p>{genInfo[0]?.mobile}</p>
            </>
          ) : (
            <>
              <Link href="/" className="text-xl text-white">
                Petrol Pump Accounting
              </Link>
              <p>Make Accounting Easier</p>
            </>
          )}
        </div>
        <div className="justify-center items-center flex gap-2">
          {auth ? (
            <button onClick={signInWithGoogle}>Log out</button>
          ) : (
            <button onClick={signInWithGoogle}>Log in</button>
          )}
          {genInfo[0] ? (
            <>
              <Link href="/createDSR">DSR</Link>
              <Link href="/ledgers">Ledgers</Link>
            </>
          ) : (
            <>
              <button href="/registration" onClick={regHandler}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default header;
