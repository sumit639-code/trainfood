"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
  const query = router.query
  console.log(query)
  return (
    <div>page</div>
  )
}

export default page