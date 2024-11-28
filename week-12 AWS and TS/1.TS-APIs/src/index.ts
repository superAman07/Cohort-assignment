// interface User{
//     name:string,
//     age:number
// }

// function addAges(user1:User,user2:User):number{
//     return user1.age+user2.age;
// }

// const result = addAges({name:"aman",age:22},{name: "GOku",age: 232});
// console.log(result);


// 2. Pick

// interface User{
//     id: string;
//     name:string;
//     email:string;
//     createdAt:Date;
// }
// type UserProfile = Pick<User,'name'|'email'>;
// const displayUserProfile= (user:UserProfile)=>{
//     console.log(`Name:${user.name} , Email:${user.email}`);
// };

//3. Partial

// interface User{
//     id: string;
//     name:string;
//     email:string;
//     createdAt:Date;
// }
// type UserProfile = Pick<User,'name'|'email'>;
// type UserProfileOptional = Partial<UserProfile>;

// function displayUserProfile(userOptional:UserProfileOptional){
//     console.log(`Name:${userOptional.name} , Email:${userOptional.email}`);
// };
// displayUserProfile({name:"goku"})/// baaki khaali bhi chorh sakte hai TS complain nhi karega....even empty bhi chorh sakte hai jo bhi cheeze Partial me hai vo optional ho jaati hai...


// 4. Readonly or readonly
// ye jaise hum const arr = [1,2,3,4] karke arr[3]=7 karke update karte hai jabki array const type me hai...(asalme array me kuch bhi ho rha vo abhi bhi const hi hai...jab hum arr[n]=num karte hai tab inside arr change ho rha naa ki arr) aur agr hum chahe to kuch bhi change na ho uske liye Readonly ka use karte hai....like below

// interface Config{
//     readonly endpoint:string;// ye bhi kar sakte hai agr specific ko readonly karna ho 
//     apiKey:string;
// }
// const config : Readonly<Config> = {   // to make whole interface/object readonly we do this
//     endpoint:"https://api.com",
//     apiKey:"som233nijd43"
// };

//5 Record

// interface User{
//     id: string;
//     name:string;
// }
// type Users = Record<string,User>;
// const users:Users = {
//     "anime":{id:"1",name:"goku"},
//     "real":{id:"2",name:"aman"},
// }
// console.log(users['anime']);

// Exclude

// type Eventt = 'click'|'scroll'|'mousemove';
// type ExcludeEvent = Exclude<Eventt,'scroll'>;

// const handleEvent = (event:ExcludeEvent)=>{
//     console.log(event);
// }
// handleEvent('click'); 


//7.Type inference in zod (zod.infer)

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18,{ message: "You must be at least 18 years old" }).optional(),
});

type FInalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:FInalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);