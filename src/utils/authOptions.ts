import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { urlAPI } from "./API";

export const authOptions: NextAuthOptions = {
        providers: [
                GoogleProvider({
                        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
                }),
        ],
        callbacks: {
                async signIn({ user, account }: any) {
                        if (account.provider === "google") {
                                const { email } = user
                                try {
                                        const res = await fetch(`${urlAPI}/users`,
                                                {
                                                        method: "POST",
                                                        headers: {
                                                                "Content-Type": "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                                email,
                                                        }),
                                                })

                                        if (res.ok) {
                                                return user
                                        }
                                } catch (error) {
                                        console.log(error);
                                }
                                return user
                        }
                },

        },
        session: {
                strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
}