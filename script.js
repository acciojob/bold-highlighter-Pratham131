function highlight() {
    //Write your code here
	let boldText = document.querySelectorAll("strong")
	boldText.forEach((element) => {
		element.style.color = "green"
	})

}


function return_normal() {
    //Write your code here
	let boldText = document.querySelectorAll("strong")
	boldText.forEach((element) => {
		element.style.color = "black"
	})
    
}

let link = document.getElementByTagName("a")[0]
link.addEventListner('onMouseOver', highlight)
link.addEventListner('onMouseOut', return_normal)