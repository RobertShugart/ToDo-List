//Check off specific todos by clicking
//can only add event listeners to elements that are present when page loads
$("ul").on("click", "li", function(){//when an li is clicked inside a ul
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new text from input
		var todoText = $(this).val();
		//clear text input
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});