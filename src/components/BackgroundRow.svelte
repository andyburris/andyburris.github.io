<style>
	.background-row{
			/* border: 2px solid #2282DA; */
			display: flex;
			flex-direction: row;
	}

	.background-text {
			margin-top: 0em;
			margin-bottom: 0em;
	}

	.first-row{
			/* border: 2px solid #ff0000; */
			animation: marquee 80s linear infinite;
	}

	.second-row{
			/* border: 2px solid #aa0000; */
			animation: marquee2 80s linear infinite;
			animation-delay: -40s;
	}

	.rtl {
			animation-direction: reverse;
	}

	@keyframes marquee {
			from {
				transform: translateX(100%);
			}
			to {
				transform: translateX(-100%);
			}
		}

	@keyframes marquee2 {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-200%);
		}
	}
</style>

<div class="background-row ltr" id="background-row-ltr">
	<p class="background-text first-row ltr">CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS CATALYST
		STUDIOS CATALYST STUDIOS CATALYST STUDIOS&nbsp;</p>
	<p class="background-text second-row ltr">CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS
		CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS&nbsp;</p>
</div>

<div class="background-row rtl" id="background-row-rtl">
	<p class="background-text first-row rtl">CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS CATALYST
		STUDIOS CATALYST STUDIOS CATALYST STUDIOS&nbsp;</p>
	<p class="background-text second-row rtl">CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS
		CATALYST STUDIOS CATALYST STUDIOS CATALYST STUDIOS&nbsp;</p>
</div>
