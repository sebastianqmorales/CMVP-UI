/** @type {import('./$types').Actions} */
export const actions = {
	default: async (e) => {
		// Get form data and post it to the server
		fetch('http://localhost:3000/comments', {
			// Adding method type
			method: 'POST',

			// Adding body or contents to send
			body: JSON.stringify({
				userName: 'foo',
				commentType: 'disagreeing',
				commentContent: 'a test hopefully works'
			}),

			// Adding headers to the request
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			// Converting to JSON
			.then((response) => response.json())

			// Displaying results to console
			.then((json) => console.log(json));
	}
};
