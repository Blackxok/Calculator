const buttons = document.querySelector(".buttons");
const btn = document.querySelectorAll("span");
const val = document.getElementById("inp");

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function () {
		//
		if (this.innerHTML == "") {
			console.log(val.innerHTML.split(","));
		}
		//
		if (this.innerHTML == "=") {
			if (val.innerHTML.length < 2) {
				val.innerHTML = "";
			} else {
				val.innerHTML = eval(val.innerHTML);
			}
		} else {
			if (this.innerHTML == "clear") {
				val.innerHTML = "";
			} else {
				val.innerHTML += this.innerHTML;
			}
		}
	});
}
