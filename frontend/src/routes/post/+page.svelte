<script>
	import Comments from './comment.svelte';
	import CommentInput from './commentInput.svelte';
	import CommentContainer from './commentsContainer.svelte';

	let userName = 'Sebastian';
	let date = '5 days ago';
	let commentType = 'Agreeing';
	let commentContent = 'This is a test for passing in data to the component';
	let upVote = 100;
	let downVote = 240;
</script>

<div class="commentSection p-6 flex flex-col justify-center">
	<CommentInput />
	<Comments {userName} {date} {commentType} {commentContent} {upVote} {downVote} />
</div>

<style>
</style>
