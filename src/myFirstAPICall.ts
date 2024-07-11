export default function firstAPICall() {
  const theAPIFetch = function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // The API call was successful!
        console.log("First API call was a success!", response);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  };
  theAPIFetch();
}
