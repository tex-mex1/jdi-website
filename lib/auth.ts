import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In production, verify against your database.
        // Credentials are NEVER stored in this file - use environment variables
        // and a proper database with hashed passwords.
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Demo: accept any login for development purposes.
        // Replace with actual DB lookup and bcrypt comparison in production.
        const demoUser = {
          id: "1",
          email: credentials.email,
          name: "Investor",
        };

        // TODO: Replace this block with actual authentication:
        // const user = await db.user.findUnique({ where: { email: credentials.email } });
        // if (!user) return null;
        // const valid = await bcrypt.compare(credentials.password, user.hashedPassword);
        // if (!valid) return null;
        // return user;

        return demoUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
