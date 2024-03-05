"use client";

import React, { useContext } from "react";
import { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { userLocation, userTrain } from "../context/Loc";

async function Get(num) {
  let ans = await fetch(`https://api.railwayapi.site/api/v1/trains/${num}`);

  if (!ans.ok) {
    throw Error("Failed to fetch");
  }
  return ans.json();
}
const search = () => {
  const trainnum = useContext(userTrain);
  const locations = useContext(userLocation);
  const router = useRouter();
  async function get2() {
    const dat = await Get(trainval);

    return dat;
  }
  const [data, setData] = useState(undefined);
  const [trainval, setVal] = useState("");
  const [location, setLoc] = useState("");
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="inputs w-screen absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col">
          <div className=" w-full text-center text-white font-semibold text-4xl">
            Searching...
          </div>
          <div className="search w-8/12 rounded-full  px-10 py-3 m-4 overflow-hidden bg-white flex justify-between items-center drop-shadow-lg">
            <input
              value={trainval}
              type="text"
              placeholder="Train No."
              className="search w-full rounded-full px-3 py-3"
              onChange={(e) => {
                setVal(e.target.value);
                // console.log(trainval);
              }}
            />
          </div>
          <div className="search w-8/12 rounded-full  px-10 py-3 m-4 overflow-hidden bg-white flex justify-between items-center drop-shadow-lg">
            <input
              value={location}
              type="text"
              placeholder="Enter Your location"
              className="search w-full rounded-full px-3 py-3"
              onChange={(e) => {
                setLoc(e.target.value);
                // console.log(location);
              }}
            />
          </div>
          <span
            className="sea p-2 rounded-full bg-zinc-100 cursor-pointer px-6 py-3 mx-2 flex justify-between gap-3 items-center transition hover:-translate-y-1"
            onClick={async () => {
              // setData(await get2());
              trainnum.setTnum(await get2());
              locations.setLocation(location);
              console.log(trainnum.Tnum,locations.Tlocation)
              router.push('Check');
              // router.refresh
            }}
          >
            Search
            <CiSearch size={"1.5em"} />{" "}
          </span>
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
