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
const prisma = new client_1.PrismaClient({
    log: ['info', 'query']
});
// this is like how in leetcode when we are at starting page it show us next some problem numbers (let say 10) not all and let if we select problem 3rd now next some (10) element numbers will be on screen and so on..
//like in SQL
// SELECT * FROM question OFFSET 0 LIMIT 10;
// SELECT * FROM question OFFSET 10 LIMIT 10;
// SELECT * FROM question OFFSET 20 LIMIT 10;
//Same alternate in postgreSQL
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.post.findMany({
            take: 3, // consider 3 steps after skipping like ye agle 3 questions dikhayega skip k baad
            skip: 5 // skip 5 steps... like ye 5 question k baad k 3 questions dikhayega basically ye skip kar dega n steps
        });
        console.log(res);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Done");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
