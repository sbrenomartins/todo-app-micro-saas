import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "../database";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/app",
  },
  adapter: PrismaAdapter(prismaClient),
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.EMAIL_SECRET,
});
