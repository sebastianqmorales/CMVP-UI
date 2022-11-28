<script>
	import Comments from './comment.svelte';
	import CommentInput from './commentInput.svelte';
	let userName = 'Sebastian';
	let date = '5 days ago';
	let commentType = 'Agreeing';
	let commentContent = 'This is a test for passing in data to the component';
	let upVote = 100;
	let downVote = 240;
</script>

<div class="container">
	<CommentInput />
</div>

<Comments {userName} {date} {commentType} {commentContent} {upVote} {downVote} />

<style>
	.container {
		padding: 3rem;
	}
</style>
