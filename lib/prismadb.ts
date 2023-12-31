import { PrismaClient } from "@prisma/client";

// here we add prisma variable to our global window
declare global{
    var prisma: PrismaClient | undefined

}

const prismadb = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb