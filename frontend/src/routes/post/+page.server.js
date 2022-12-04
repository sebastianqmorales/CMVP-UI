/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// Get form data and post it to the server
		const formData = await request.formData();
		const userName = formData.get('userName');
		const commentType = formData.get('commentType');
		const commentContent = formData.get('commentContent');
		const upVotes = formData.get('upVotes');
		const downVotes = formData.get('downVotes');
		console.log(commentContent);
		fetch('http://localhost:3000/comments', {
			// Adding method type
			method: 'POST',

			// Adding body or contents to send
			body: JSON.stringify({
				userName: 'Sebastian',
				commentType,
				commentContent,
				upVotes,
				downVotes
			}),

			// Adding headers to the request
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			// Displaying results to console
			.then((response) => response.json())
			.then((json) => console.log(json));
	}
};
