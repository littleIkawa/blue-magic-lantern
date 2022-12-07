<script lang="ts">
  import type { PageData } from ".svelte-kit/types/src/routes/blog/tag/[tag]/$types";
  import ArticleCardContainer from "@/components/blog/ArticleCardContainer.svelte";

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
  <ArticleCardContainer cardList={data.post} />
{/if}
