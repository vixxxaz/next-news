'use client'

import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation"

export default  function page() {

const router = useRouter();

  return (
    <div>
      
        <h1 className="text-color-sixt">hello from home page</h1>
        <button type='button'onClick={()=> router.push("./Home/slug")}>Techcrunch article</button>
        <Link className='flex mx-auto text-center align-items'  href='./'>  
          <ArrowBigLeft className="color-black h-20 w-20"/>
          BACK Home 
        </Link>
    </div>
  )
}

