// Burger menu
const bodyHidden = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const navLink = document.querySelector(".menu__list");
const navMenu = document.querySelector(".menu");
const bcgOpacity = document.querySelector(".bcgOpacity");

if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle("activeIcon");
		navMenu.classList.toggle("activeMenu");
		bodyHidden.classList.toggle("bodyHidden");
		bcgOpacity.classList.toggle("activeOpacity");
	});
};

if (navLink) {
	navLink.addEventListener("click", function(e) {
		navMenu.classList.remove("activeMenu");
		iconMenu.classList.remove("activeIcon");
		bodyHidden.classList.remove("bodyHidden");
		bcgOpacity.classList.remove("activeOpacity");
	});
};

window.addEventListener('click', function(e) {
	if (!iconMenu.contains(e.target) && !navMenu.contains(e.target)) {
		navMenu.classList.remove("activeMenu");
		iconMenu.classList.remove("activeIcon");
		bodyHidden.classList.remove("bodyHidden");
		bcgOpacity.classList.remove("activeOpacity");
}
});
// -------------