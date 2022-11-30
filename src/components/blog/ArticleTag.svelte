<script lang="ts">
  import { base } from "$app/paths";

  export let tag: string;
</script>

<a href={`${base}/blog/tag/${tag}`}>
  <div class="article-tag">
    #{tag}
  </div>
</a>

<style>
  .article-tag {
    background-color: var(--main-bg-color);
    border: 1px solid var(--main-font-color);
    border-radius: 6px;
    color: var(--main-font-color);
    width: fit-content;
    padding: 0.1rem 0.9rem;
    margin: 0.1rem 0.3rem;
  }
  .article-tag:first-child {
    margin-left: 0;
  }
  .article-tag:hover {
    background-color: var(--blog-active-tag-bg-color);
    /* color: var(--main-font-color); */
  }
</style>
