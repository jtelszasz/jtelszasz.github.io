filterSelection("all")

// Add class to cards with blank images or no images
function markBlankImageCards() {
	var cards = document.getElementsByClassName("card");
	for (var i = 0; i < cards.length; i++) {
		var img = cards[i].querySelector("img");
		if (!img || !img.src || img.src.indexOf("blank.png") > -1 || img.src.trim() === "" || img.complete && img.naturalHeight === 0) {
			cards[i].classList.add("card-no-image");
		}
	}
}

// Run on page load
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', markBlankImageCards);
} else {
	markBlankImageCards();
}

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("card");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
