import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data:{
            email:"aman123@gmail.com",
            name:"Aman"
        }
    })
}
main()
  .then(async()=>{
      console.log("Done witht he query...")
      await prisma.$disconnect()
  })
  .catch(async (e)=>{
      console.error(e);
      await prisma.$disconnect()
      process.exit(1)
  })