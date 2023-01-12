<script>
	export let title = 'Cuatex is the BEST!';
	export let author = 'Sebastian the Great';
	export let content =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit? Nisi repellendus tempore excepturi tenetur, amet minus doloremque voluptatum eum cupiditate rem! Nemo sapiente magni maxime deleniti possimus, nihil atque?';
	export let upVotes = 1328;
	export let downVotes = 197;
	export let description =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit? Nisi repellendus tempore excepturi tenetur, amet minus doloremque voluptatum eum cupiditate rem! Nemo sapiente magni maxime deleniti possimus, nihil atque?';
</script>

<div class="p-10">
	<h1 class="text-lg sm:text-3xl tracking-wide">{title}</h1>
	<h6 class="text-md sm:text-lg">
		Posted by <a href="/account" class="text-orange-500 font-bold tracking-wide text-md sm:text-lg"
			>{author}</a
		>
	</h6>
	<p>{content}</p>
	<div class="flex">
		<div class="votes">{upVotes}</div>
		<div class="votes">{downVotes}</div>
	</div>
	<p>{description}</p>
</div>
