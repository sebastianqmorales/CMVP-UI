<script>
    import Comments from "$lib/components/comment.svelte";
    import CommentInput from "$lib/components/commentInput.svelte";
    let test ="Sebastian"
    let test1 = "5 days ago"
    let test2 = "Agreeing"
    let test3 = "This is a test for passing in data to the component"
    let test4=100;
    let test5 = 240;
</script>

<div class="container">
    <CommentInput/>
</div>

<!-- <Comments 
    userName={test} date={test1} commentType={test2} 
    commentContent={test3} upVote={test4} downVote={test5}
/> -->

<style>
    .container{
        padding: 3rem;
    }
</style>