import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/atoms/atom'
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot> 
       <MainApp/>
    </RecoilRoot>
  )
}
function MainApp(){
  const NetworkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  // const [messagingCount,setMessagingCount] = useRecoilState(messagingAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom);
  const totalMessagesSum= useRecoilValue(totalNotificationSelector);// using selectors is the better approach rathen than using useMemo
  
  // const totalMessagesSum =useMemo(()=>{           // we can use useMemo so that it will rerender only when array values changes
  //   NetworkNotificationCount+jobAtomCount+messagingCount+notificationAtomCount;//but here we can also do use selectors which is inside tha atom.js
  // },[NetworkNotificationCount,jobAtomCount,messagingCount,notificationAtomCount]) 
  return (
    <div> 
      <button>Home</button>
      <button>My Network ({NetworkNotificationCount>=100?"99+":NetworkNotificationCount})</button>
      <button>Jobs({jobAtomCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notification({notificationAtomCount>=100?"99+":notificationAtomCount})</button> 
      <button>Me ({totalMessagesSum})</button>

      {/* <button onClick={()=>{
        setMessagingCount(count=>count+1)  // this is just for how we can use useRecoilState (setMessagingCount)
      }}>Me</button> */}
    </div>
  )
}

export default App
