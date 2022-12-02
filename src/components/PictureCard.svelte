<script lang="ts">
  import { base } from "$app/paths";

  // /img/以下のパス
  export let path: string;
  export let width = "100%";
  export let alt: string;
</script>

<div class="picture-card" style:width style:height={"auto"}>
  <img src={`${base}/img/${path}`} {alt} />
</div>

<style>
  .picture-card {
    background-color: darkslateblue;
    border: 2px solid var(--main-font-color);
    margin: 1rem 2rem;
  }
  .picture-card > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
