import { useEffect,} from "react";
function useInterval(fx,timeout){ 
    const interval= useEffect(()=>{
        setInterval(()=>{
            fx()
        },timeout);
        return ()=>{
            clearInterval(interval);
        }
    },[fx,timeout])  
}
export default useInterval;