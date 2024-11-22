import { PrismaClient } from '@prisma/client';
import { Client } from 'pg';

const prisma = new PrismaClient();

// 1- Create user (C)
// In Prisma, you don't explicitly need to call prisma.$connect() because Prisma Client automatically establishes a connection to your database when you execute a query.
// However, if you want to manually disconnect from the database, you can use prisma.$disconnect
// create user here we are using prisma and also we can use pg library too... CRUD (C done)
async function createUser() { 
  const newUser = await prisma.user.create({
    data: {
      username: 'Aman1',
      email: 'aman1@gmail.com',
      password: 'password',
    },
  });

  console.log('User created:', newUser); 
  const user = await prisma.user.findUnique({
    where: {
      email: 'aman1@gmail.com',
    },
  });

  console.log('User fetched:', user);
}

createUser()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();   
  });
        


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
