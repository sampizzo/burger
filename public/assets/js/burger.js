$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                location.reload();
            }
        );
    });

    $(".changeDevoured").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        // var newDevour = $(this).data("newdevour");
        // var newDevourState = {
        //     devour: newDevour
        // };
        var newDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("Burger Devoured");
                location.reload();
            }
        );
    });



    $(".deleteBurger").on("click", function (event) {
        event.preventDefault();
        console.log(this);
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted Burger");
                location.reload();
            }
        );
    });

    (".reorderBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevoured = {
            devoured =  false
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(function () {
            console.log("Burger Reordered");
            location.reload();
        });
    });
    
});