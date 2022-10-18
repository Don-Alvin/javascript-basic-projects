// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navIcon = document.querySelector(".icon");

const changeIcon = () => {
	navIcon.classList.toggle("fa-bars");
	navIcon.classList.toggle("fa-times");
};

navToggle.addEventListener("click", () => {
	changeIcon();
	links.classList.toggle("show-links");
});
