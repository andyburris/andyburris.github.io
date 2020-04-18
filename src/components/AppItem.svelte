<script>
  export let app;
  export let uppercase;
  import { sharedin, sharedout } from "./mjukna-transition.js";
</script>

<style>
  .app-item {
    display: flex;
    flex-direction: row;
    padding: 4vmin 8vmin 4vmin 8vmin;
    cursor: pointer;
    background-color: #292929;
    /* border: 2px solid red; */
  }

  .app-item-icon {
    height: 10vmin;
    width: 10vmin;
    align-self: center;
  }

  .app-item-name {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 8vmin;
    font-weight: 700;
    font-size: 10vmin;
    color: #ffffff;
  }
</style>

<div class="app-item" id="app-item-{app.name}">
  <img
    in:sharedin out:sharedout transition-key={`icon-${app.name}`}
    class="app-item-icon"
    src="/app_icons/{app.iconSrc}"
    alt="{app.name} icon" />
  <p
    in:sharedin out:sharedout transition-key={`name-${app.name}`}
    class="app-item-name">
    {app.name}
  </p>
</div>
