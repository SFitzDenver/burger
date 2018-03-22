$(function() {
	// POST request
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burger").val().trim(),
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
		function() {
			console.log("created new burger");
			location.reload();
		}
		);
	});
});

$(function() {
	// POST request
	$(".devour-button").on("click", function(event) {
		event.preventDefault();
		var id = $(this).data("id");

		$.ajax(`/burgers/${id}`, {
			method: "PUT"
		}).then(
		function() {
			console.log("devoured it");
			location.reload();
		}
		);
		});
	});

