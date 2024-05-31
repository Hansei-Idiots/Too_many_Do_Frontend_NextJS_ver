import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23li2zMv4DFeIaNjF1',
            clientSecret: 'b4a8308c3f87a0d89e369b5cbae97f18aed12ad0',
        }),
    ],
    secret : 'holerpencil070919!^^'
};
export default NextAuth(authOptions);