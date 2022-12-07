<script lang="ts">
  import type { PageData } from "./$types";
  import ArticleCardContainer from "@/components/blog/ArticleCardContainer.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Blue Magic Lantern | Blog</title>
</svelte:head>

<h1>Blog</h1>
<ArticleCardContainer cardList={data.post} />
