import { PrismaClient } from "@prisma/client";

// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// export default client;

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

// add Prisma to the NodeJS global type
interface CustomNodeJSGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJSGlobal;

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
