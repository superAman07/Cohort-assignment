import { atom, selector } from "recoil";

export const countAtom = atom({
    key:'countAtom',
    default:0
});   // now wè can use this instead of useState...

export const evenSelector = selector({
    key:'evenSelector',
    get:({get})=>{
        const count = get(countAtom);
        return count%2===0;
    }
});