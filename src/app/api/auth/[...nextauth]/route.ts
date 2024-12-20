import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

import LinkedInProvider from "next-auth/providers/linkedin";
import InstagramProvider from "next-auth/providers/instagram";
import DiscordProvider from "next-auth/providers/discord";

const authOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_Id!,
            clientSecret:process.env.GITHUB_SECRET!,
        }),

          // Google Authentication
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
  
    
  
      // LinkedIn Authentication
      LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID!,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      }),
  
      // Discord Authentication
      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID!,
        clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      }),

      
      InstagramProvider({
        clientId: process.env.INSTAGRAM_CLIENT_ID!,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
      }),
    ]
};

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};