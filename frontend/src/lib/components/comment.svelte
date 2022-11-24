<script>
// To do: 
// Make the comment type responsive to user input, the logic for changing the comment type should be here
// Variables for pretty much everything here
export let userName;
export let date;
export let commentType;
export let commentContent;
export let downVote;
export let upVote;

</script>


<div class="container border-solid border-2 p-4">
    <div class="flex gap-3 mb-2 content-center">
        <div class="username font-semibold">{userName}</div>  
        <div class="date font-semibold">{date}</div>
        {#if commentType === 'Agreeing'}
        <div class="comment-type border-solid border-2 rounded-lg border-blue-600 p-1 text-xs font-bold">{commentType}</div>
        {:else if commentType === 'Neutral'}
        <div class="comment-type border-solid border-2 rounded-lg border-gray-600 p-1 text-xs font-bold">{commentType}</div>
        {:else}
        <div class="comment-type border-solid border-2 rounded-lg border-red-600 p-1 text-xs font-bold">{commentType}</div>
        {/if}
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