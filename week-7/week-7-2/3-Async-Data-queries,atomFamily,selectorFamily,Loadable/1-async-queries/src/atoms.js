// import axios from "axios";
// import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: selector({
//         key: "notifications",
//         get: async () => {
//             const res = await axios.get("http://localhost:3000/notifications")
//             return res.data;
//         }
//     })
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })
import axios from "axios";
import { atom, selector } from "recoil"; 
export const notificationsAtom = atom({
  key: "notificationsAtom", // Unique key for the atom
  default: selector({
    key: "notificationsSelector", // Unique key for the selector
    get: async () => {
      try {
        const res = await axios.get("http://localhost:3000/notifications");
        return res.data;
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
        return {
          network: 10,
          jobs: 0,
          messaging: 16,
          notifications: 9
        };
      }
    }
  })
});

// Selector for total notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector", // Unique key for total notification selector
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  }
});
