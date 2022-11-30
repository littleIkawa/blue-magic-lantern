<script lang="ts">
  import type { PageData } from "./$types";
  import ArticleCard from "@/components/blog/ArticleCard.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Blue Magic Lantern | Blog</title>
</svelte:head>

<h1>Blog</h1>
<div class="contents-container">
  {#each data.post as metadata}
    <ArticleCard {metadata} />
  {/each}
</div>

<style>
  .contents-container {
    margin: 3rem auto;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
  }
  @media (max-width: 1024px) {
    .contents-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
