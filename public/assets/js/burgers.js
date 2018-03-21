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

