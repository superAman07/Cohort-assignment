import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// insert data
// async function insertUser(username:string,firstName:string,lastName:string,password:string){
//     const res = await prisma.user.create({
//         data:{
//             email: username,
//             firstName,
//             lastName,
//             password
//         },
//         select:{
//             id:true,
//             password:true
//         }
//     })
//     console.log(res);
// }
// insertUser("aman123@gmail.com","Aman","Vishwakaram","superAmann");

//update 
interface UpdateParams{
    firstName:string,
    lastName: string
}
async function updateUser(username:string,{
    firstName,
    lastName
}:UpdateParams){
   const res = await prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}
updateUser("aman123@gmail.com",{firstName:"superAman",lastName:"007"})