import React from "react";
import Link from "next/link";
const notFound = () => {
  return (
    <>
      <div className="w-full h-screen flex  justify-center items-center flex-col">
        <span className="text-center font-semibold flex justify-center items-center">
          <span className="text-4xl px-2">404-</span> Page not Found
        </span><br/>
        <Link className="text-gray-900 underline" href={"/"}>Get back</Link>
      </div>
    </>
  );
};

export default notFound;
