import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { clientSecrets, clientId, secret } from "../../../secretKeys"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: clientId,
            clientSecret: clientSecrets,
        }),
    ],
    secret : secret
};
export default NextAuth(authOptions);