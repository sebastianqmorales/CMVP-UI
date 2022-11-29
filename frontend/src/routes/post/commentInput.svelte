<script>
	// The comment input when completed should output a full comment at the bottom of the input,
	// Then it should clear the input and render the comment
	// The form data will be taken and passed into the props of the Comment component
	// This is where the input for the comment will go

	// Comment input will send data to mongoDB directly or to server api that will then post data to mongodb

	// Get the data from the form
	// Post it to the server

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	}
</script>

<div class="container">
	<form
		on:submit|preventDefault={onSubmit}
		method="post"
		class="border-solid border-2 border-gray-400 "
	>
		<!-- <input class="border-solid border-2" placeholder="Share your perspective." type="text"/> -->
		<textarea class="container" name="comment" placeholder="Share your perspective." />
		<div
			class="container flex justify-between items-center px-2 py-1 border-solid border border-gray-200"
		>
			<label><input type="radio" name="radio" value="agreeing" /> agreeing</label>
			<label><input type="radio" name="radio" value="neutral" /> neutral</label>
			<label><input type="radio" name="radio" value="disagreeing" /> disagreeing</label>
			<button class="border-solid border-2 rounded-lg border-orange-500 px-2" type="submit"
				>comment</button
			>
		</div>
	</form>
</div>

<style>
	form {
		width: 500px;
	}

	textarea {
		height: 100px;
		padding: 0.5rem;
		outline: none;
	}

	label > input {
	}
</style>
