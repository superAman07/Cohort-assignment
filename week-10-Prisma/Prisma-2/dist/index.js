"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 1- Create user (C)
// In Prisma, you don't explicitly need to call prisma.$connect() because Prisma Client automatically establishes a connection to your database when you execute a query.
// However, if you want to manually disconnect from the database, you can use prisma.$disconnect
// create user here we are using prisma and also we can use pg library too... CRUD (C done)
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data: {
                username: 'Aman1',
                email: 'aman1@gmail.com',
                password: 'password',
            },
        });
        console.log('User created:', newUser);
        const user = yield prisma.user.findUnique({
            where: {
                email: 'aman1@gmail.com',
            },
        });
        console.log('User fetched:', user);
    });
}
createUser()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
// 2- Read data (R)
//  here we are getting user using "prisma" and for pg you can refer below this where we need to provide all details of db we are using in schema.prisma(.env wale) to access the same data ----> CRUD (CR done)
// async function getUser(userID:number){
//     const user = await prisma.user.findUnique({
//         where:{
//             id:userID
//         },
//     })
//     if(user)console.log("user found: ", user);
//     else console.log("user not found you need to sign up");
// }
// getUser(8)
// .catch(e=>{
//     console.error(e);
//     process.exit(1);
// })
// .finally(async ()=>{
//     await prisma.$disconnect();
// });
// using "pg" 
// const client = new Client({
//   user: 'your-db-username',      // Database username
//   host: 'localhost',             // Database host (usually localhost)
//   database: 'your-db-name',      // Database name
//   password: 'your-db-password',  // Database password
//   port: 5432,                    // Default PostgreSQL port
// });
// // Connect to PostgreSQL
// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL');
//   })
//   .catch(err => {
//     console.error('Connection error', err.stack);
//   });
// // Fetch user by ID
// async function getUserById(userId) {
//   const res = await client.query('SELECT * FROM "User" WHERE id = $1', [userId]);
//   console.log(res.rows[0]);
// }
// getUserById(1);
// client.end();
