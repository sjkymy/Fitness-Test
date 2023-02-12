// export default function navigate(url, isReplace = false) {
//     const historyChangeEvent = new CustomEvent("historychange", {
//       detail: {
//         url,
//         isReplace,
//       },
//     });
  
//     dispatchEvent(historyChangeEvent);
//   };

export default function navigate(url) {
  history.pushState(null, null, url);
}