<script>
  export let iconSrc;
  export let title = "Title";
  export let body = "Body";
</script>

<style>
  .item-holder {
    display: flex;
    flex-direction: row;
    margin-top: 2vmin;
    margin-bottom: 2vmin;
  }

  .icon {
    margin-left: 8vmin;
    width: 8vmin;
    height: 8vmin;
  }

  .text-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4vmin;
  }

  .title {
    margin: 0px 0px;
    font-weight: 600;
    color: #ffffff;
    font-size: 3vmin;
  }
  .body {
    margin: 0px 0px;
    font-size: 3vmin;
    color: rgba(255, 255, 255, 0.7);
  }
</style>

<div class="item-holder">
  <img class="icon" src="icons/{iconSrc}" alt={iconSrc} />
  <div class="text-holder">
    <p class="title">{title}</p>
    <p class="body">
      {@html body}
    </p>
  </div>
</div>
