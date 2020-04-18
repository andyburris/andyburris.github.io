<script>
	
let header;
let tabHome;
let tabApps;

const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

const thresholdRange =  range(1, 100).map(i => i/100)
const tabSize = () => header.getBoundingClientRect().height

if ("IntersectionObserver" in window) {
    console.log("IntersectionObserver exists");
    const options = {
        threshold: thresholdRange
    }

    const apps = document.querySelector(".apps")

    let observer = new IntersectionObserver(entries => {
        console.log("observer fired");
        entries.forEach(entry => {
            const tabIndicator = document.querySelector(".tab-indicator")
            if(entry.boundingClientRect.y <= (entry.rootBounds.y + tabSize*2)){
                const appTabRect = tabApps.getBoundingClientRect();
                tabIndicator.setAttribute("style", `margin-left: ${appTabRect.x}px; width: ${appTabRect.width}px;`)
            } else {
                const homeTabRect = tabHome.getBoundingClientRect();
                tabIndicator.setAttribute("style", `margin-left: ${homeTabRect.x}px; width: ${homeTabRect.width}px;`)
            }
        })
    }, options);

    console.log("observing - target = " + apps);
    observer.observe(apps);
}

</script>

<style>
	.header{
			z-index: 4;
			background-color: #1F1F1F;
			position: fixed;
			top: 0;
			width: 100%;
			/* 4dp Elevation */
			box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
	}

	.tabs {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
	}

	.header-tab{
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #FFFFFF;
			font-weight: 600;
	}

	.tab-text {
			padding: 4px 24px;
			font-size: .75em;
	}

	.tab-indicator{
			width: 64px;
			height: 1px;
			background-color: #FFFFFF;
	}
</style>

<div class="header" bind:this={header}>
	<div class="tabs">
		<div class="header-tab" bind:this={tabHome}>
			<p class="tab-text">HOME</p>
		</div>
		<div class="header-tab" bind:this={tabApps}>
			<p class="tab-text">APPS</p>
		</div>
	</div>
	<div class="tab-indicator" style="margin-left: 419px;">

	</div>
</div>