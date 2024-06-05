import Image from "next/image";

import Nav from "./components/Nav";
import Article from "./components/Article";

import {  options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "./components/UserCard";


 


export default async function Home() {

  const session = await getServerSession(options)

  return (

    <>
    
      {/* <IndexPage /> */}
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
            {session ? (
            <UserCard user={session?.user} pagetype={"Home"} />
                ) : (
                  <h1>you are not loggin</h1>
                )}  
        <Article />
            
      </main>
    </>

  );
}
