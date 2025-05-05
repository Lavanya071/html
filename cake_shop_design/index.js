const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	const navbar = document.querySelector(".navbar");
	const menuBtn = document.getElementById("hamburger");
	const slides = document.querySelectorAll(".home .slides-container .slide");

	let index = 0;

	// Toggle navbar visibility on hamburger click
	if (menuBtn && navbar) {
		menuBtn.addEventListener("click", () => {
			navbar.classList.toggle("active");
		});
	}

	// Close navbar on scroll
	window.addEventListener("scroll", () => {
		if (navbar) {
			navbar.classList.remove("active");
		}
	});

	// Function to show slide by index
	function showSlide(nextIndex) {
		if (!slides.length) return;

		slides[index].classList.remove("active");
		index = (nextIndex + slides.length) % slides.length;
		slides[index].classList.add("active");
	}

	// Next slide handler
	window.next = function () {
		showSlide(index + 1);
	};

	// Previous slide handler
	window.prev = function () {
		showSlide(index - 1);
	};
});
