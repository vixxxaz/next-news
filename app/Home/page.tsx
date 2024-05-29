'use client'


import { useRouter } from "next/navigation"

export default  function page() {

const router = useRouter();

  return (
    <div>
        <h1 className="text-color-black">hello from home page</h1>
        <button type='button'onClick={()=> router.push("./Home/slug")}>Nouveau article</button>
    </div>
  )
}

