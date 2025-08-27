const circleOne = document.getElementById("circle-one");
const quote = document.querySelector("#quote p:nth-child(2)");
const quoteTwo = document.querySelector("#quote p:nth-child(3)");
const experience = document.getElementById("experience");

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
