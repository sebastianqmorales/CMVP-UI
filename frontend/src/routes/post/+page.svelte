<script>
	import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button, Radio } from 'flowbite-svelte';
	import Comments from './comment.svelte';
	import CommentInput from './commentInput.svelte';
	import Post from './postContent.svelte';
	import CommentContainer from './commentsContainer.svelte';

	// import '../../app.postcss';

	let userName = 'Sebastian';
	let date = '5 days ago';
	let commentType = 'Agreeing';
	let commentContent = 'This is a test for passing in data to the component';
	let upVote = 100;
	let downVote = 240;
</script>

<!-- Messing around with flex, trying to center the comment input and output -->
<h1>Test</h1>
<Post />
<div class="commentSection py-6">
	<form class="md:px-20 xl:px-40">
		<Textarea rows="3" class="mb-4" placeholder="Share your perspective.">
			<div slot="footer" class="flex items-center justify-between">
				<Button type="submit">Share</Button>
				<div class="flex gap-3">
					<Radio name="custom" custom>
						<div
							class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<div>
								<div class="text-md font-semibold">Agreeing</div>
							</div>
						</div>
					</Radio>
					<Radio name="custom" custom>
						<div
							class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-gray-600 peer-checked:border-gray-700 peer-checked:text-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<div>
								<div class="text-md font-semibold">Neutral</div>
							</div>
						</div>
					</Radio>
					<Radio name="custom" custom>
						<div
							class="inline-flex justify-center items-center px-4 py-1 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<div>
								<div class="text-md font-semibold">Disagreeing</div>
							</div>
						</div>
					</Radio>
				</div>
			</div>
		</Textarea>
	</form>
</div>
<div class="commentSection py-6">
	<Comments {userName} {date} {commentType} {commentContent} {upVote} {downVote} />
</div>

<style>
</style>
