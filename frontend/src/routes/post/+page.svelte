<script>
	import Comments from './comment.svelte';
	import Post from './postContent.svelte';
	import CommentInput from './UseThisCommentInput.svelte';

	let userName = 'Sebastian';
	let date = '5 days ago';
	let commentType = 'Agreeing';
	let commentContent = 'This is a test for passing in data to the component';
	let upVote = 100;
	let downVote = 240;
</script>

<Post />
<div class="commentSection py-6">
	<CommentInput />
</div>
<div class="commentSection py-6">
	<Comments {userName} {date} {commentType} {commentContent} {upVote} {downVote} />
</div>

<style>
</style>
