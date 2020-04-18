<script>
	import BackgroundRow from "./BackgroundRow.svelte";
	var quantity = 20;
	var text = 'CATALYST STUDIOS';
	console.log(text);
</script>

<style>
	#background {
			position: absolute;
			white-space: nowrap;
			overflow: hidden;
			top: 0;
			left: 0;
			font-weight: 700;
			font-size: 4vw;
			color: rgba(0, 0, 0, 0.12);
			-webkit-user-select: none; /* Safari */        
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* IE10+/Edge */
			user-select: none; /* Standard */
			/* border: 2px solid #008A82; */
			clip: rect(0px,100vw,100vh,0px);
	}

		#background-rotate {
			rotate: -45deg;
			transform-origin: 50vw 100%;
	}


</style>

<div id="background">
	<div id="background-rotate">
		{#each Array(30) as i}
			<BackgroundRow/>
		{/each}
	</div>
</div>