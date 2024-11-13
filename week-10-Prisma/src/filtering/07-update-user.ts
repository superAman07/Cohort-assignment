import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.update({
        where :{
            id:1,
        },
        data:{
            name:"Aman Vishwakarma"
        }
    })
}
main()
.then(async ()=>{
    console.log("done");
    prisma.$disconnect();
})
.catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})