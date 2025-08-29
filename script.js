const circleOne = document.querySelector("#circle-one");
const quote = document.querySelector("#quote p:nth-child(2)");
const quoteTwo = document.querySelector("#quote p:nth-child(3)");
const experience = document.querySelector("#experience");
const hireMe = document.querySelector("#hire-me");
const one = document.querySelector("#one");
// const containerTwo = document.querySelector(".article-two-container");
// const imaging = document.querySelector(".imaging");

circleOne.addEventListener("mouseenter", () => {
  quote.classList.add("quote");
  quoteTwo.classList.add("quote-two");
  experience.classList.add("experience");
});
circleOne.addEventListener("mouseleave", () => {
  quote.classList.remove("quote");
  quoteTwo.classList.remove("quote-two");
  experience.classList.remove("experience");
});


hireMe.addEventListener("mouseenter", () => {
  one.classList.add("article-oning");
});
hireMe.addEventListener("mouseleave", () => {
  one.classList.remove("article-oning");
});


// imaging.addEventListener("mouseenter", () => {
//   containerTwo.classList.add("container-two-js");
// })
// imaging.addEventListener("mouseleave", () => {
//   containerTwo.classList.remove("container-two-js");
// })