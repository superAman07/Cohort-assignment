const axios = require("axios");

// async function main(){
//     const response = await fetch("https://httpdump.app/dumps/6a4b670c-115b-4842-b41a-98a63e787ea1",{
//         method:"POST"
//     });
//     const json=await response.text();
//     console.log(json);
// }

async function main(){
    const response = await axios.get("https://httpdump.app/dumps/6a4b670c-115b-4842-b41a-98a63e787ea1",{
       auth: {
            username: "Aman",
            password: "Nahi bataungaaa"
        },
        headers: {
            Authorization: "Bearer 123"
        }}); 
    console.log(response.data);
}

main();