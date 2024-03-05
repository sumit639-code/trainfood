"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
  const query = router.query
  console.log(query)
  return (
    <>
      <Link href={'/'} className='bg-blue-400'>cllick</Link>
    </>
  )
}

export default page