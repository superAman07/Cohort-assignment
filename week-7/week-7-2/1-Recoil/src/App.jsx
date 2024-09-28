import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App(){ 
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count(){
  console.log("re rendering...")  // this is rerendernig once but like context API which re-render on every click...
  return <div>
    <CountRenderer />
    <EvenOrOdd/>
    <Buttons />
  </div>
}
function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return( 
    <div>
      <b>
        {count}
      </b>
    </div>
  )
}
function EvenOrOdd(){
  // const count=useRecoilValue(countAtom);
  // return count%2===0?"It is Even":"It is Odd";
  const isEven = useRecoilValue(evenSelector);
  return isEven?"It is Even":"It is Odd";
}
function Buttons(){
  const setCount=useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>{
        setCount(count=>count+1)// if we use setCount(count+1) that will re render every time...so count=>count+1 is better to avoid rerendering
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count=>count-1)
      }}>Decrease</button>
    </div>
  )
}
export default App;