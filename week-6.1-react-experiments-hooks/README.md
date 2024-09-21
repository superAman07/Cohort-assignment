##1: useState
##2: useEffect

**`useEffect`** ka main kaam yehi hota hai ki jo bhi logic ya code uske andar likha hota hai, usko **rerun** karvata hai jab **dependencies array** (`[]`) mein listed values change hoti hain.

### `useEffect` ke kaam ko samajhne ke liye basic flow:

1. **Component render hone ke baad**:
   - Jab component first time render hota hai ya update hota hai, tab `useEffect` ka andar ka code chal jata hai.
  
2. **Dependencies array** (`[]`):
   - Ye array decide karta hai ki `useEffect` kab rerun hoga.
   - Agar array khali hai (`[]`), to sirf **first render** pe code chalega, baad mein kabhi rerun nahi hoga.
   - Agar dependencies specify ki gayi hain (jaise `[id]`), to `useEffect` tab rerun karega jab un values mein koi change aaye.

### Example se samajhte hain:

```js
useEffect(() => {
  // Ye code tab chalega jab component first time render hoga
  // Aur phir tab chalega jab 'id' value change hogi
  console.log("Todo ID changed:", id);
  
  // Code to fetch todo based on id
}, [id]);  // id is dependency
```

- Yaha pe, jab `id` change hoga, to `useEffect` ka andar ka code fir se chalega.
  
### Jab `[]` array khali ho:
```js
useEffect(() => {
  // Ye sirf first render ke time chalega
  console.log("Component mounted");
}, []);  // Empty dependency array
```

- Is case mein `useEffect` sirf component ke first render pe chalega aur baad mein kabhi rerun nahi hoga, chahe koi state ya prop change ho.

### Jab dependencies di gayi ho:
```js
useEffect(() => {
  console.log("ID or Name changed:", id, name);
}, [id, name]);  // id aur name dependencies hain
```

- Ab jab bhi `id` ya `name` ki value change hogi, `useEffect` rerun karega.

### Summary:
- **`useEffect`** ka kaam hai side-effects handle karna, jaise ki data fetch karna, DOM manipulation, ya subscription set karna.
- **Dependencies array** ke through hum control karte hain ki kaunse value change pe ye rerun kare.

Is se aap effectively apne components mein data fetch karne ya kisi action ko based on state changes manage kar sakte ho.

##3:useMemo