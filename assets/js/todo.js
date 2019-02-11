//Check off todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    //13 = Enter Key
   if(event.which === 13) {
       //new todo text from input:text
     var todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
   }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
})