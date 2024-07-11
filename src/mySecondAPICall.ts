const BAD_API_ENDPOINT = "https://jsonplaceholder.typicode.com/postses";
const GOOD_API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export default function secondAPICall() {
  const theAPIFetch = function () {
    fetch(GOOD_API_ENDPOINT)
      .then(function (response) {
        // The API call was successful!
        if (response.ok) {
          console.log("SECOND also good");
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        // This is the JSON from our response
        console.log(data);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  };
  theAPIFetch();
}
