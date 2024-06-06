import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
    
    providers: [
        //google provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true,
          }),
        //gihub provider    
        GithubProvider({
            clientId: process.env.GITHUB_ID  as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: 'your cool username'
                },
                password: {
                    label: 'password',
                    type: "password",
                    placeholder: "your awesome password"
                }               
            },
            async authorize(credentials, req) {
                // This is where you need to retrieve user data
                //to verify with credentials
                //Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = {id: "43", name: "vince", password: "nextnews"}

                
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        })
    ],
   
};