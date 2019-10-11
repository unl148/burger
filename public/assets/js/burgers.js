// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bn").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/", {
            type: "PUT",
            data: {
                id: id,
                devoured: 1
            }
        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

