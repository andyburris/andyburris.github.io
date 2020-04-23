<script context="module">
  import { apps } from "../apps.js";

  export function preload({ params, query }) {
    const app = apps.find(
      a => a.name.toLowerCase() == params.slug.toLowerCase()
    );
    return { app: app };
  }
</script>

<script>
  import { sharedin, sharedout } from "../../components/mjukna-transition.js";
  import { fly } from "svelte/transition";
  import AppItem from "../../components/AppItem.svelte";
  import AppDetailItem from "../../components/AppDetailItem.svelte";
  export let app;

  // svelte doesn't run transitions on first layout, hiding and showing simulates that
  let animateIntro = false;
  setTimeout(() => {
    animateIntro = true;
  }, 0);
</script>

<style>
  .app-detail-holder {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #292929;
    overflow-y: scroll;
    padding-top: 4vmin;
    box-sizing: border-box; /*otherwise paddings will push boundaries below browser window*/
  }

  .app-detail-screenshot-holder {
    padding: 4vmin 8vmin;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
  }

  .app-detail-screenshot {
    margin-right: 4vmin;
    width: 30vh;
    object-fit: cover;
    object-position: 0% 100%;
    height: calc(30vh * (16 / 9) * 0.966);
    border-radius: 1vh;
    flex-shrink: 0;
  }
</style>

<div
  class="app-detail-holder"
  in:sharedin
  out:sharedout
  transition-key={`background-${app.name}`}>
  <AppItem {app} />
  <div class="app-detail-screenshot-holder">
    {#if animateIntro}
      {#each app.screenshotSrcs as src, i}
        <img
          class="app-detail-screenshot"
          src="/screenshots/{app.name.toLowerCase()}/{src}"
          alt="Screenshot of {app.name}"
          in:fly={{ y: 200, duration: 500, delay: 100 + 50 * i }} />
      {/each}
    {:else}
      <img class="app-detail-screenshot" alt="" style="opacity: 0;" />
      <!-- Placeholder so the rest of the content doesn't jump -->
    {/if}
  </div>
  <AppDetailItem iconSrc="icon-info.svg" title="About" body={app.info} />
  <AppDetailItem iconSrc="icon-github.svg" title="Github"body="<a href={app.github}>{app.github}</a>" />
  {#if app.playStore != ""}
    <AppDetailItem iconSrc="icon-play-store.svg" title="Play Store" body="<a href={app.playStore}>{app.playStore}"/>
  {/if}
</div>
