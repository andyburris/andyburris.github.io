<script>
  import AppItem from "./AppItem.svelte";
  import { stores } from "@sapper/app";
  import { apps } from "../routes/apps.js";
  import { sharedin, sharedout } from "./mjukna-transition.js";
</script>

<style>
  .apps {
    margin-top: 4vmin;
  }
  a {
    text-decoration: none;
  }
</style>

<div class="apps">
  {#each apps as a}
    <div in:sharedin out:sharedout transition-key={`background-${a.name}`}>
      <a rel="prefetch" href="/apps/{a.name.toLowerCase()}">
        <AppItem app={a} />
      </a>
    </div>
  {/each}
</div>
