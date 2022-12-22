/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// To Do: User name comes from the user session or something similar
		// Get form data and post it to the server
		const formData = await request.formData();
		// const userName = formData.get('userName');
		const commentType = formData.get('commentType');
		const commentContent = formData.get('commentContent');
		const upVotes = formData.get('upVotes');
		const downVotes = formData.get('downVotes');
		fetch('http://localhost:3000/comments', {
			method: 'POST',
			body: JSON.stringify({
				userName: 'Miles',
				commentType,
				commentContent,
				upVotes,
				downVotes
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			// Displaying results to console
			.then((response) => response.json())
			.then((json) => console.log(json));
	}
};
