// TOGGLE MENU
document.querySelector("#menu .icone img").addEventListener('click', (el) => {
	let navMenu = el.target.parentNode.parentNode;

	if(navMenu.classList.contains("aberto")) { 
		navMenu.classList.remove("aberto");
		document.querySelector('body').classList.remove('travar');
  } else {
		navMenu.classList.add("aberto");
		document.querySelector('body').classList.add('travar');
  }
});
// TOGGLE MENU