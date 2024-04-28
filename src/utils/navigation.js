// const checkisSupported = () => {
//     return Boolean(document.startViewTransition)
// }


// export const startViewTransition = () => {
//     if (!checkisSupported()) return
//         window.navigation.addEventListener("navigate", (event) => {
//           const toUrl = new URL(event.destination.url)
    
//           if (location.origin !== toUrl.origin) return
    
//           event.intercept({
//             async handler() {
//               const response = await fetch(toUrl.pathname) // clean-code
//               const text = await response.text()
    
//               const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
    
//               console.log(data)
    
//               document.startViewTransition(() => {
//                 document.body.innerHTML = data
//                 document.documentElement.scrollTop = 0
//               })
//             },
//           })
//         })
//       }