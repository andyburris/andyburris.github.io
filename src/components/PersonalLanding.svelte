<script>
  import Button from "./Button.svelte";
  
  import { slide } from "svelte/transition";
  

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function typeText() {
    const finalTopText = "Hi,";
    const finalBottomText = "I’m Andy.";
    for (let c of finalTopText) {
      topText = topText + c;
    }
    await sleep(200);
    for (let c of finalBottomText) {
      bottomText = bottomText + c;
      //await sleep(100);
    }
  }

  let topText = "";
  let bottomText = "";
  typeText();

  let visible = true;
  function test() {
    visible = !visible;
  }
</script>

<style>
  @font-face {
    font-family: "Volterra";
    src: url("/fonts/Volterra-Regular.otf");
  }

  .accent-bar {

    height: 0.5em;
    left: 0px;

    /* Gradient/Main */

    background: linear-gradient(
      174.89deg,
      #008a82 0%,
      #0e87a6 57.29%,
      #2282da 100%
    );
  }

  .landing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: white;
  }

  .landing-title {
    margin-left: 16vmin;
  }

  p {
    font-family: "Volterra", Helvetica, sans-serif;
    font-size: 20vmin;
    color: #1f1f1f;
    line-height: 1;
    margin: 0px;
    padding: 0px;
  }

  .button-holder {
      margin-bottom: 8vmin;
      display: flex;
      justify-content: center;
  }
</style>

<div class="landing">
  <div class="accent-bar" on:click={test} />
  <div class="landing-title" >
    {#if topText.length != 0}
      <p>{topText}</p>
    {/if}
    {#if bottomText.length != 0}
      <p in:slide>{bottomText}</p>
    {/if}

  </div>
  <div class="button-holder">
      <!-- <Button class="button" text="See More" iconSrc="/icons/icon-arrow-down.svg" /> -->
  </div>
</div>
