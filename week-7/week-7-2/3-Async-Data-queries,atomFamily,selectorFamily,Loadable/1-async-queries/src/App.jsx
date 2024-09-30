import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notificationsAtom, totalNotificationSelector } from './atoms';
import { useEffect } from 'react';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [notificationData, setNotificationData] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // This effect will run on component mount
    // You can add any additional setup logic here if needed
  }, []);

  return (
    <div>
      <button>Home</button>
      <button>My Network ({notificationData.network >= 100 ? "99+" : notificationData.network})</button>
      <button>Jobs {notificationData.jobs}</button>
      <button>Messaging ({notificationData.messaging})</button>
      <button>Notifications ({notificationData.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}

export default App;
