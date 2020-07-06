$(document).ready(function () {

    $(function () {
        $(".devour").on("click", function (event) {

            event.preventDefault();

            var burger_id = $(this).data("id");
            console.log(`Devouring the burger #${burger_id} `);

            // Send the PUT request.
            $.ajax("/api/burger/" + burger_id,
                {
                    type: "PUT",
                }).then(function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
                );
        });
    });

    // add burger click event
    $(function () {
        $("#addBurger").on("click", function (event) {

            event.preventDefault();

            var newBurger = {
                burgerName: $("#burgerName").val()
            }
            console.log(newBurger)

            // Send the PUT request.
            $.ajax("/api/burger/",
                {
                    type: "POST",
                    data: {
                        data: newBurger
                    }
                }).then(function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
                );
        });
    })
})