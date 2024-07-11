import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import firstAPICall from "./myFirstAPICall.ts";
firstAPICall();
import secondAPICall from "./mySecondAPICall.ts";
secondAPICall();
// let placeHolderData =

import secondAPICallPromise from "./mySecondAPICallPromise.ts";
let placeHolderData = await secondAPICallPromise();

// import { setupTester } from "./testMe.ts";

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     // The API call was successful!
//     console.log("success!", response);
//   })
//   .catch(function (err) {
//     // There was an error
//     console.warn("Something went wrong.", err);
//   });

let broski = 5;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>

    <p>${broski}</p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <p id="tester" type="text"></p>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
// setupTester(document.querySelector<HTMLButtonElement>("#tester")!);
