import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import API from "~/app/api"
import { error, log } from "console";
export const authOptions = {
        // Configure one or more authentication providers
        providers: [
                CredentialsProvider({
                        name: "Credentials",
                        credentials: {
                                email: {},
                                password: {}
                        },
                        async authorize(credentials, req) {
                                return API.post("users/login", {
                                        email: credentials?.email,
                                        password: credentials?.password,
                                })
                                        .then((response) => {
                                                return response.data;
                                        })
                                        .catch((error) => {
                                                throw new Error(error.response.data.message);
                                        }) || null;
                        },
                }),
                GoogleProvider({
                        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
                }),
                FacebookProvider({
                        clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
                        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
                })
        ],
        callbacks: {
                async signIn({ user, account }: any) {
                        if (account.provider === "google") {
                                const { name, email } = user
                                try {
                                        const res = await fetch('https://backend-itourgo.onrender.com/users/signup',
                                                {
                                                        method: "POST",
                                                        headers: {
                                                                "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                                name,
                                                                email,
                                                        }),
                                                })

                                        if (res.ok) {
                                                return user
                                        }
                                } catch (error) {
                                        console.log(error);
                                }
                        }
                        return user
                },

        }

}

export default NextAuth(authOptions)
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };