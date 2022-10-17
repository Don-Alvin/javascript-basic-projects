// let count = 0;

// const counter = document.querySelector("#value");
// const decreaseBtn = document.querySelector(".decrease");
// const resetBtn = document.querySelector(".reset");
// const increaseBtn = document.querySelector(".increase");

// // Decrease count

// decreaseBtn.addEventListener("click", () => {
//  count--;
// 	counter.textContent = count;
// });

// // Reset count

// resetBtn.addEventListener("click", () => {
// 	count = 0;
// 	counter.textContent = count;
// });

// // Increase count

// increaseBtn.addEventListener("click", () => {
//  count++;
// 	counter.textContent = count;
// });

// Set initial count
let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else count = 0;

		if (count > 0) {
			value.style.color = "green";
		} else if (count < 0) {
			value.style.color = "red";
		} else {
			value.style.color = "#222";
		}
		value.textContent = count;
	});
});
