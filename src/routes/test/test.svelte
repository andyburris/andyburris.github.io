<script>
  import mjukna from "mjukna";
  import { sharedin, sharedout } from "../../components/mjukna-transition.js";
  import { fly } from "svelte/transition";

  let t2;
  let t3;
  let margin = 0;

  function moveH1() {
    console.log("moveH1");
    mjukna([t2, t3]);
    margin = margin + 20;
  }

  let introAnimate = false;
  introAnimate = true;
</script>

<style>
  h1 {
    font-weight: 700;
  }
  .test-holder {
    margin-top: 200px;
  }

  .test-1-holder {
    display: flex;
    flex-direction: row;
  }

  .test-img {
    width: 96px;
    height: 96px;
  }
</style>

<div class="test-holder">
  <div class="test-1-holder">
    {#if introAnimate}
      {#each Array(3) as e, i}
        <img
          class="test-img"
          src="app_icons/trails_icon.png"
          alt="test icon"
          in:fly={{ y: 100, duration: 400, delay: 100 + 50 * i }} />
        <!-- <h1 class="test1" in:fly={{ x: 200, duration: 2000, delay: 100 + (100 * i) }}>Test 1</h1> -->
      {/each}
    {/if}

  </div>

  <h1
    class="test2"
    in:sharedin={{ test: 't in' }}
    out:sharedout
    transition-key="t2"
    bind:this={t2}
    style="margin-left: {margin}px;">
    Test 2
  </h1>
  <h1
    class="test3"
    in:sharedin={{ test: 't in' }}
    out:sharedout={{ duration: 0 }}
    transition-key="t3"
    bind:this={t3}
    style="margin-left: {margin}px;">
    Test 3
  </h1>
  <button on:click={moveH1}>Move</button>
  <a href="test/test2">
    <button>Transition 2</button>
  </a>

  <a href="test/test3">
    <button>Transition 3</button>
  </a>
</div>
