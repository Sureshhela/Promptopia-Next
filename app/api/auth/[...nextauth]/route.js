import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDb } from "@utils/database";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        connectToDb();
        //check if the user is already exist
        const userExists = await User.findOne({
          email: profile.email,
        });
        //if not create a new user and save it to the database
        if (!userExists) 
          await User.create({
            email: profile.email,
            username: profile.name.replace(/[\s_]/g, "").toLowerCase(),
            image: profile.picture,
          });
          return true;
        }
        catch (error) {
            console.log("some thing went wrong in api auth route.js", error);
            return false;
          }
      } 
    },
  });

export { handler as GET, handler as POST };
