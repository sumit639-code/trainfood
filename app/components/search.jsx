import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
const search = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="absolute top-1/4 w-full text-center text-white font-semibold text-4xl">Searching...</div>
        <div className="search w-8/12 rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-10 py-3 overflow-hidden bg-white flex justify-between items-center drop-shadow-lg">
          <input
            type="text"
            placeholder="Train No."
            className="search w-full rounded-full px-3 py-3"
          />
          <div className="sea p-2 rounded-full bg-slate-400 cursor-pointer">
            <CiSearch size={"1.5em"} />          </div>
        </div>
        <Image
          src={"/city.jpg"}
          alt="Picture of the city"
          fill
          style={{
            "z-index": "-9",
            "object-fit": "cover",
          }}
        />
      </div>
    </>
  );
};

export default search;
