import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log:['info','query']
});

// this is like how in leetcode when we are at starting page it show us next some problem numbers (let say 10) not all and let if we select problem 3rd now next some (10) element numbers will be on screen and so on..


//like in SQL
// SELECT * FROM question OFFSET 0 LIMIT 10;
// SELECT * FROM question OFFSET 10 LIMIT 10;
// SELECT * FROM question OFFSET 20 LIMIT 10;

//Same alternate in postgreSQL

async function main(){
    let res = await prisma.post.findMany({
        take:3,    // consider 3 steps after skipping like ye agle 3 questions dikhayega skip k baad
        skip:5    // skip 5 steps... like ye 5 question k baad k 3 questions dikhayega basically ye skip kar dega n steps
    })
    console.log(res);
}
main()
.then(async()=>{
    console.log("Done");
    await prisma.$disconnect();
})
.catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})