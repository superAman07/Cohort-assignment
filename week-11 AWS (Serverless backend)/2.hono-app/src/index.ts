import { Hono } from 'hono'

const app = new Hono()

//middleware
async function authMiddleware(c:any, next:any){
  //c is context, means context of this request response
  if(c.req.header("Authorization")){
    // do validation
    await next()
  }else{

    return c.text("You don't have access")
  }
}
// app.use(authMiddleware);
//  body, header, query
app.post('/',authMiddleware ,async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text('Hello Hono!')
})
export default app
