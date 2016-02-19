var form = document.querySelector("#movie-search-form");

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  var query = document.querySelector("#query").value;
  var url = "http//omdbapi.com/?s=" + query;
  $.get(url, resultsReceived);    //Get the url and then run the resultsReceived function
};

function resultsRecevied(JSONresults) {  //stuff that came back from API
  JSONresults["Search"].forEach(displayMovie);   //You can only use a forEach loop on an array.  When accessing OMDB, the first key happens to be "Search" For each item in my "Search" array, run the displayMovie function.
};

function displayMovie(movie) {
  var item = document.createElement("li");
  var link = document.createElement("a");
  var title = document.createElement("div");
  var release = document.createElement("div");

  link.textContent = movie("Title");
  release.textContent = movie("Year");

  var url = "http://www.imdb.com/title/" + movie["imdbID"];
  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");

};


// // Here are the clues to help you get started:

// // // This is related to the form:                                                              
// //     1.)  grab form element 
//     // 2.)  add event listener to this form element, on submit, and call the "formSubmitted function"


// //create the formSubmitted function 

// 1.)  create the function in the same manner as the ToDo list

// 2.)  Create a var url = "http://omdbapi.com/?s=" + wordthatwasenteredintoinputfield"

// 3.)  use the $.get syntax, and be sure to call the "resultsReceived" function
 
// create the resultsReceived function
// 1.)  this function takes in the parameter of "results"-- results are what the API gives back to you.  -- 
//     The "results" are in the form of a JSON
// hint:  results["Search"] == returns an array
// hint: loop through this array using forEach(displayMovie)
// actual code: results["Search"].forEach(displayMovie)

// create a function called displayMovie(movie)
// 1.) create 4 new elements (li, a, title div, release div)
//     function displayMovie(movie) {
//       Create new elements (x4)                                // In jQuery terms:
// 2.)  Set element text content (x2) to the link and the release

// 3.)  Set element  attributes (x2) to the URL
//   var url = "http://www.imdb.com/title/" + movie["imdbID"];
//   link.setAttribute (href and the target)

// 4.)  add CSS to the elements (item, title, release)
// add movie class to item
// add movie-title to title
// add movie-release-date to release

// 5.)  append elements to the parent 
// title-- append the link
// item --append title and release 
// select for "#movies" and append the item element
