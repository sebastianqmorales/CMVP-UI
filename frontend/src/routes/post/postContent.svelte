<script>
	export let title = 'Cuatex is the BEST!';
	export let author = 'Sebastian the Great';
	export let date = Date.now();
	export let content =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit? Nisi repellendus tempore excepturi tenetur, amet minus doloremque voluptatum eum cupiditate rem! Nemo sapiente magni maxime deleniti possimus, nihil atque?';
	export let upVotes = 1328;
	export let downVotes = 197;
	export let disclaimer =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit? Nisi repellendus tempore excepturi tenetur, amet minus doloremque voluptatum eum cupiditate rem! Nemo sapiente magni maxime deleniti possimus, nihil atque?';
	export let description =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit? Nisi repellendus tempore excepturi tenetur, amet minus doloremque voluptatum eum cupiditate rem! Nemo sapiente magni maxime deleniti possimus, nihil atque?';
</script>

<h1>{title}</h1>
<h6>Posted by <a href="/account">{author}</a></h6>
<h6>{date}</h6>
<h6>Clearview: {disclaimer}</h6>
<p>{content}</p>
<div class="flex">
	<div class="votes">{upVotes}</div>
	<div class="votes">{downVotes}</div>
</div>
<p>{description}</p>
