import Link from "next/link"

export default function Nav() {

  return (

    <nav className="w-full h-100 bg-tertiary-color rounded p-5">
        <h1 className="w-full h-100 text-slate-800 rounded p-5">hello from nav bar </h1>
        <Link href="./Home">Home</Link>
        <Link href="./Home/slug">Home</Link>
        
    
    </nav>

  )
}

