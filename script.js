function highlight() {
    //Write your code here
	let boldText = document.querySelectorAll("strong")
	boldText.forEach((element) => {
		element.style.color = "rgb(0, 128, 0)"
			// "green"
	})

}


function return_normal() {
    //Write your code here
	let boldText = document.querySelectorAll("strong")
	boldText.forEach((element) => {
		element.style.color = "rgb(0, 0, 0)"
			// "black"
	})
    
}
let link = document.querySelector("a")
// let link = document.getElementByTagName("a")[0]
link.addEventListener('onMouseOver', highlight)
link.addEventListener('onMouseOut', return_normal)












