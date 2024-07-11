// Source: https://dmitripavlutin.com/javascript-fetch-async-await/

// Verdict: attempting to use async with await gave the "promise"
//          of a promise, RATHER than the actual results. Fail.

// const BAD_API_ENDPOINT = "https://jsonplaceholder.typicode.com/postses";
const GOOD_API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export default function secondAPICallPromise() {
  // const theAPIFetch = function () {
  //   fetch(GOOD_API_ENDPOINT)
  //     .then(function (response) {
  //       // The API call was successful!
  //       if (response.ok) {
  //         console.log("SECOND also good");
  //         return response.json();
  //       } else {
  //         return Promise.reject(response);
  //       }
  //     })
  //     .then(function (data) {
  //       // This is the JSON from our response
  //       console.log(data);
  //     })
  //     .catch(function (err) {
  //       // There was an error
  //       console.warn("Something went wrong.", err);
  //     });
  // };
  // theAPIFetch();

  async function myAsyncFunc() {
    const response = await fetch(GOOD_API_ENDPOINT);

    if (!response.ok) {
      // const message = `An error has occured: ${response.status}`;
      // throw new Error(message);
      return Promise.reject(response);
    }

    // yes .json returns a promise.
    // I will catch it in the function call
    const data = response.json();

    // prints to console the following:
    // The data is [object Promise]
    // verdict: fail
    // console.log(`The data is ${data}`);

    console.log(data);
  }

  // return myAsyncFunc().catch((error) => {
  //   error.message; // 'An error has occurred: 404'
  // });
  return myAsyncFunc();
}
