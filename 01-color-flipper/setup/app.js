const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
	// Get random number betwen 0 and 3
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
