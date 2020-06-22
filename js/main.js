let sticky = false
$("#sticky-navigation").removeClass("hidden")
$("#sticky-navigation").slideUp(0)

let currentPosition = 0;
const imageCounter = $("[data-name='image-counter']").attr("content")
console.log(imageCounter)
setInterval(()=>{

	if (currentPosition < imageCounter) {
		currentPosition++;
	}else{
		currentPosition = 0;
	}

	$("#gallery .inner").css({
		left: "-"+currentPosition*100+"%"
	})
}, 3000)

$("#menu-opener").on("click", function(){
	$("#responsive-nav ul").toggleClass("active")
})

$(window).scroll(()=>{
	const inBottom = isInBottom()

	if(inBottom && !sticky){
		sticky = true
		stickNavigation()
		console.log("mostrar");
	}else if(!inBottom && sticky){
		sticky = false
		unStickNavigation()
		console.log("ocultaar");
	}
})

function stickNavigation(){
	$("#description").addClass("fixed").removeClass("absolute")
	$("#navigation").slideUp()
	$("#sticky-navigation").slideDown()
}

function unStickNavigation(){
	$("#description").removeClass("fixed").addClass("absolute")
	$("#navigation").slideDown()
	$("#sticky-navigation").slideUp()
}

function isInBottom(){
	const $description = $("#description")
	const descriptionHeight = $description.height()

	return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
}

// Agregar efectos de responsive design
