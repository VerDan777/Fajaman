var $ = require("jquery");

function MobileMenu() {
var $mainMenu = $(".main-menu");
var $menuIcon = $(".menu-icon");
var $menuLinks = $(".main-menu__list a");
console.log('works');

$menuIcon.on("click", toggleMenu);
$menuLinks.on("click", toggleMenu);
$menuLinks.on("tap", toggleMenu);

function toggleMenu() {
$mainMenu.toggleClass("main-menu--shown");
$menuIcon.toggleClass("menu-icon--close-x");
}
}

module.exports = new MobileMenu;