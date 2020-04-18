<script>
  import Background from "./Background.svelte";
</script>

<style>
  .landing {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    /* background-color: red; */
  }

  .landing-title {
    z-index: 0;
    font-size: 6vw;
    line-height: 0.75em;
    overflow: auto;
    background: linear-gradient(135deg, rgb(0, 138, 92) 0%, #2282da 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes text-enter {
    0% {
      padding: 0px -32px;
    }
    100% {
      padding: 0px 16px;
    }
  }

  .landing-title-left {
    font-weight: 900;
    text-align: start;
    animation-name: text-enter;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  .landing-title-right {
    font-weight: 900;
    text-align: end;
    animation-name: text-enter;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
</style>

<div class="landing">
  <div class="landing-title">
    <h1 class="landing-title-left">CATALYST</h1>
    <h1 class="landing-title-right">STUDIOS</h1>
  </div>
  <Background />
</div>
