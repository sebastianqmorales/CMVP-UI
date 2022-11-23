<script>
// To do: 
// Make the comment type responsive to user input, the logic for changing the comment type should be here
// Variables for pretty much everything here
export let userName = 'John Smith';
export let date = '1 day ago';
export let commentType = 'Disagreeing';
export let commentContent = 'This is the test comment it should take input from the user and present it here but right now I am just creating the styles';
let downVote = 20;
let upVote = 223;

</script>


<div class="container border-solid border-2 p-4">
    <div class="flex gap-3 mb-2 content-center">
        <div class="username font-semibold">{userName}</div>  
        <div class="date font-semibold">{date}</div>
        <div class="comment-type border-solid border-2 rounded-lg border-red-600 p-1 text-xs font-bold">{commentType}</div>
    </div>
    <p class="mb-2">{commentContent}</p>
    <div class="flex gap-3 votes">
            <div class="font-semibold up vote">{upVote}</div>
            <div class="font-semibold down vote">{downVote}</div>
            <div class="font-semibold">REPLY</div>
    </div>
</div>

<style>

</style>