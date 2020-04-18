<script>
  export let text = "See More";
  export let iconSrc = "";
</script>

<style>
  .button {
    display: inline-flex;
    padding-right: 16px;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(
      174.89deg,
      #008a82 0%,
      #0e87a6 57.29%,
      #2282da 100%
    );
    border-radius: 999px;

    /* 1dp Elevation */
    box-shadow: var(--elevation-1);
    transition: box-shadow 200ms;
    cursor: pointer;
  }

  .button:hover{
    box-shadow: var(--elevation-2);
  }

  .button:active{
    box-shadow: var(--elevation-4);
  }

  .button-icon {
    color: #ffffff;
    margin-left: 16px;
    width: 24px;
    height: 24px;
  }

  .button-text {
    margin-left: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
</style>

<div class="button-holder">
  <div class="button">
    <img class="button-icon" src={iconSrc} alt="{text} button icon" />
    <p class="button-text">{text.toUpperCase()}</p>
  </div>
</div>
