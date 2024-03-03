"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
async function Get(num) {
  let ans = await fetch(`https://api.railwayapi.site/api/v1/trains/${num}`);
  if (!ans.ok) {
    throw Error("Failed to fetch");
  }
  return ans.json();
}
const search = () => {
  async function get2() {
    const dat = await Get(val);
    return dat;
  }
  const [data, setData] = useState(undefined)
  const [val, setVal] = useState("");
  return (
    <>
      <div className="w-screen h-screen">
        <div className="absolute top-1/4 w-full text-center text-white font-semibold text-4xl">
          Searching...
        </div>
        <div className="search w-8/12 rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-10 py-3 overflow-hidden bg-white flex justify-between items-center drop-shadow-lg">
          <input
            value={val}
            type="text"
            placeholder="Train No."
            className="search w-full rounded-full px-3 py-3"
            onChange={(e) => {
              setVal(e.target.value);
              console.log(val);
            }}
          />
          <Link
            href={{
              pathname: "/Check",
              query: data, // the data
            }}
            className="sea p-2 rounded-full bg-slate-400 cursor-pointer"
            onClick={async () => {
              setData(await get2());
            }}
          >
            <CiSearch size={"1.5em"} />{" "}
          </Link>
        </div>
        <Image
          src={"/city.jpg"}
          alt="Picture of the city"
          fill
          style={{
            zIndex: "-9",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};

export default search;
