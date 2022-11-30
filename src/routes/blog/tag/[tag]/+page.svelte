<script lang="ts">
  import type { PageData } from ".svelte-kit/types/src/routes/blog/tag/[tag]/$types";
  import ArticleCard from "@/components/blog/ArticleCard.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Blue Magic Lantern | Blog | #{data.tag}の検索結果</title>
</svelte:head>

<h1>Blog</h1>
<h2>#{data.tag}の検索結果</h2>
{#if data.post.length === 0}
  <p>一致するものはありませんでした。</p>
{:else}
  <div class="contents-container">
    {#each data.post as metadata (metadata.id)}
      <ArticleCard {metadata} />
    {/each}
  </div>
{/if}

<style>
  .contents-container {
    margin: 2rem auto;
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
