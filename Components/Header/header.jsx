import React from "react";
import { generalInfo } from "@/Constants/constants";
import Link from "next/link";

const header = () => {
  return (
    <>
      <div className="h-16 w-auto bg-slate-950 flex justify-around items-center text-cyan-300">
        <div className=" p-2 px-5">
            <h2>{generalInfo.title}</h2>
        </div>
        <div className="justify-center items-center flex gap-2">
            <Link href="/createDSR">DSR</Link>
            <Link href="/ledgers">Ledgers</Link>
        </div>
      </div>
    </>
  );
};

export default header;
