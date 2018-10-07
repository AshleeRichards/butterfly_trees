const nav = document.getElementById("topNav");
const main = document.getElementById("main");
const menu = document.getElementsByClassName("menuitems");
const close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "3em";
main.style.marginTop = "1em";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="6.25em";};

close.addEventListener("click", function(){
  let menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }
});

function navToggle() {
	//to close
	if (nav.style.height <= "275px") {
	nav.style.height = "3em";
	main.style.marginTop = "3em";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="6em";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.0)";

	}
	//to open
	else if (nav.style.height <= "3em") {
	nav.style.height = "275px";
	main.style.marginTop = "275px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

	}

};
