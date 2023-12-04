import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='dashboard'>
        <h1 className='header'>Link component to nvigate</h1>
        <Link  href="/dashboard/users/selectedusers" className='link'>selected users</Link>
    </div>
  )
}

export default page