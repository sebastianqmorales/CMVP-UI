<script>
    // The comment input when completed should output a full comment at the bottom of the input,
    // Then it should clear the input and render the comment 
    // The form data will be taken and passed into the props of the Comment component
    // This is where the input for the comment will go
    

    // Comment input will send data to mongoDB directly or to server api that will then post data to mongodb

</script>

<div class="container">
    <form method="post">
        <legend>Share your perspective.</legend>
        <input class="border-solid border-2" placeholder="Share your perspective." type="text"/>
        <label><input type="radio" name="radio" value="no" /> Agreeing</label>
        <label><input type="radio" name="radio" value="yes" /> Neutral</label>
        <label><input type="radio" name="radio" value="no" /> Disagreeing</label>
      
    </form>
</div>
