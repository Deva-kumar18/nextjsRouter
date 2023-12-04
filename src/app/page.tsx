import Image from 'next/image'
import Link from 'next/link'
import {LinkData} from './LinkData'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <h1 className='header'>Routing Concepts</h1>
      <Link href="dashboard/users" className='link'>users</Link>
      <Link href="/dashboard" className='link'>dashboard</Link>
      <ul>{LinkData.map((val,index)=>(
        <li className='link-map'><Link href={`${val.link}`}>{val.name}</Link></li>
      ))}</ul>
     </div>
    </main>
  )
}
