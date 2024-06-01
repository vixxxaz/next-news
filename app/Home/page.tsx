'use client'


import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation"

export default  function page() {

const router = useRouter();

  return (
    <div>
        <h1 className="text-color-sixt">hello from home page</h1>
        <button type='button'onClick={()=> router.push("./Home/slug")}>Techcrunch article</button>
        <ArrowBigLeft className="text-black"/>
    </div>
  )
}

