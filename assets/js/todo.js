$("ul").on("click", "li", function () {
	/* body... */
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//getting value from text input
		var todoText = $(this).val();
		$(this).val("");
		//adding new LI elem
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function () {
	/* body... */
	$("input[type='text']").fadeToggle(400);
})