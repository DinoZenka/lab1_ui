// import axios from 'axios';
// import notification from 'helpers/notification';
//
// const axiosInstance = axios.create({
//   baseURL: document.AGENCY_API_URL,
// });
//
// axiosInstance.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem('rating_app_token');
//   config.headers = Object.assign(
//     config.headers,
//     token ? { Authorization: `Bearer ${token}` } : {}
//   );
//   return config;
// });
//
// axiosInstance.interceptors.response.use(
//   (res) => {
//     const savedVersion = store.getState().auth.feVersion;
//     const responseVersion = res.headers['x-version'];
//     if (savedVersion === null) {
//       store.dispatch(setFEVersion(responseVersion));
//     } else if (responseVersion && savedVersion !== responseVersion) {
//       if (!document.pageReloadTimer) {
//         document.pageReloadTimer = 0;
//         setInterval(() => {
//           document.pageReloadTimer = document.pageReloadTimer + 1;
//         }, 1000);
//       }
//       notification.invoke(
//         `Page will be reloaded in ${30 - document.pageReloadTimer} seconds`,
//         { variant: 'error', autoHideDuration: 30000 }
//       );
//       setTimeout(() => {
//         if (caches) {
//           caches.keys().then((names) => {
//             for (const name of names) {
//               caches.delete(name);
//             }
//           });
//         }
//         window.location.reload(true);
//       }, 30000);
//     }
//     return res;
//   },
//   (err) => {
//     if (err.response.status === 401) {
//       localStorage.removeItem('rating_app_token');
//       return store.dispatch(setIsAuthorized(false));
//     } else {
//       if (err.response.data.validationError) {
//         const { messages } = err.response.data;
//         (Array.isArray(messages)
//             ? messages
//             : Object.values(err.response.data.messages)
//         ).forEach((message) =>
//           notification.invoke(message, {
//             variant: 'error',
//           })
//         );
//       } else {
//         if (err.response.data.message) {
//           notification.invoke(err.response.data.message, {
//             variant: 'error',
//           });
//         } else {
//           // for blob requests
//           err.response.data.text().then((res) => {
//             notification.invoke(JSON.parse(res)?.message, {
//               variant: 'error',
//             });
//           });
//         }
//       }
//       return Promise.reject(err.response);
//     }
//   }
// );
//
// export default axiosInstance;

export default { asds: 'asds'};
