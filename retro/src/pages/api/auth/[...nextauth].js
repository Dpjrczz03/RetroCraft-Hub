import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb";
import Credentials from "next-auth/providers/credentials";
import {mongooseConnect} from "../../../../lib/mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import {User} from "../../../../models/user";
import bcrypt from 'bcryptjs'

export default NextAuth({

    providers: [
        // OAuth authentication providers...
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"},
            },

            async authorize(credentials) {
                // console.log(credentials)
                const {email, password} = credentials;

                try {
                    await mongooseConnect();
                    const user = await User.findOne({email});

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

    ],
    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET,

    adapter: MongoDBAdapter(clientPromise),
})