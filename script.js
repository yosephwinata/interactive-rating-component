const rootElement = document.documentElement;
const ratingOptions = document.querySelector(".rating-options");
let selectedScore = null;
let prevClickedButton = null;

// Use Event Delegation pattern to catch the click event on the common ancestor (rating-options)
// instead of on the individual element (rating-option)
// https://www.freecodecamp.org/news/event-delegation-javascript/
ratingOptions.addEventListener("click", (event) => {
  ratingOptionButton = event.target;

  // Update the selected score variable
  selectedScore = ratingOptionButton.dataset.score;

  // Change the button's colors if clicked
  ratingOptionButton.classList.toggle("clicked");

  // Reset the color of the previously clicked button
  if (prevClickedButton) prevClickedButton.classList.toggle("clicked");

  // Set the current element as the previously clicked button
  prevClickedButton = ratingOptionButton;
});

const form = document.querySelector("form");
const thankYouCard = document.querySelector(".card-thank-you");
const userRatingElement = document.querySelector("#user-rating");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("hidden");
  thankYouCard.classList.add("visible");
  userRatingElement.innerText = selectedScore;
});
