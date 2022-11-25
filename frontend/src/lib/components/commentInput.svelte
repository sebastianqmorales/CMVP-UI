<script>
    // The comment input when completed should output a full comment at the bottom of the input,
    // Then it should clear the input and render the comment 
    // The form data will be taken and passed into the props of the Comment component
    // This is where the input for the comment will go
    

    // Comment input will send data to mongoDB directly or to server api that will then post data to mongodb

</script>

<div class="container">
    <form method="post" class="width border-solid border-2 border-gray-600">
        <!-- <input class="border-solid border-2" placeholder="Share your perspective." type="text"/> -->
        <textarea class="container input" name="comment" rows="7" placeholder="Share your perspective."></textarea> 
        <div class="container flex justify-between items-center p-1.5">
            <label><input type="radio" name="radio" value="no" /> Agreeing</label>        
            <label><input type="radio" name="radio" value="yes" /> Neutral</label>            
            <label><input type="radio" name="radio" value="no" /> Disagreeing</label>
            <button class="border-solid border-2 rounded-lg border-green-500 p-1" type="submit">Comment</button>
        </div>                    
    </form>
</div>

<style>
    textarea{
        border: none !important;
        border-width: 0px !important;
    }
    .input{
        padding: 0.5rem;
    }
    .width{
        width: 500px;
    }
</style>