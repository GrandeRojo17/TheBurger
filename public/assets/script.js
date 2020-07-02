$(document).ready(function () {
// on html page we need to use JQuery to get

    

    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        var burger_Id =$(this).children(".burger_id").val(); //get to the child element with Dom traversing and Jqery
        console.log(burger_id)
        
        $.ajax({
            method: "PUT",
            url: "burgers/" + burgerId
        })
    })
    })