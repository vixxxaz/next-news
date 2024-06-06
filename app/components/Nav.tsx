import Link from "next/link"

export default function Nav() {

  return (

    <nav className="w-full h-100 bg-tertiary-color rounded p-5">
        <h1 className="text-xl text-center font-bold w-full h-100 text-slate-800 rounded p-5">Navigate in the site </h1>      
        <ul className="flex justify-between text-xl font-bold text-slate-800">
          <li><Link className=" hover:text-sky-400" href="./Home">Home</Link></li>
          <li><Link className=" hover:text-sky-400" href="./Home/slug">New tech article</Link></li>
          <li><Link href="/api/auth/signin">Sign In</Link></li>
          <li><Link href="/api/auth/signout">Sign Out</Link></li>
        </ul>        
    </nav>
  )
}

