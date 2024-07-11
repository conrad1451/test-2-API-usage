// import axios from "axios";

// const broFunc = function () {
//   let myData = "";

//   const fetchData = async () => {
//     try {
//       // const { data: response } = await axios.get("/stuff/to/fetch");
//       const { data: response } = await axios.get(
//         "https://github-repos-nodejs-api-json.onrender.com/"
//       );
//       myData = response;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
//   return myData;
// };

// export function setupTester(element: HTMLButtonElement) {
//   let myText = "";
//   const setText = (someText: string) => {
//     myText = someText;
//     element.innerHTML = `${myText}`;
//   };
//   element.addEventListener("click", () => setText(broFunc));
//   setText("");
// }
