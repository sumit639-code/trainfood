"use client"
import Link from 'next/link';
import React, { useContext } from 'react';

import { useRouter } from 'next/navigation';
import { userLocation, userTrain } from '../context/Loc';

const page = () => {
  let location = useContext(userLocation);
  let data = useContext(userTrain)
  // location.setLocation("hi");
  // console.log(location.Tlocation)
  //   const router = useRouter();
  // const query = router.query
  // console.log(query)
  return (
    <>
      <button onClick={()=>{
        console.log(data.Tnum,location.Tlocation)
      }}>SHOW</button>
      <Link href={'/'} className='bg-blue-400'>{`${location.Tlocation}`}</Link>
    </>
  )
}

export default page