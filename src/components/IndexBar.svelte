<script lang="ts">
  import PageLink from "./PageLink.svelte";

  interface IndexData {
    name: string;
    href: string;
  }
  export let indexList: IndexData[];
</script>

<div class="contents-link-wrapper">
  {#each indexList as idx}
    {@const href = idx.href}
    <PageLink
      {href}
      color={"var(--main-bg-color)"}
      hoverColor="var(--main-bg-color)"
      currentPageColor="var(--current-page-link-color)"
      height={"3rem"}>{idx.name}</PageLink
    >
  {/each}
</div>

<style>
  .contents-link-wrapper {
    display: flex;
    justify-content: space-evenly;
    margin: 4rem 1.4rem;
    background-image: -webkit-linear-gradient(
      left,
      transparent,
      var(--main-font-color) 8%,
      var(--main-font-color) 92%,
      transparent
    );
    background-position: center;
    background-repeat: no-repeat;
  }
  @media (max-width: 1024px) {
    .contents-link-wrapper {
      margin: 2rem 0;
      position: relative;
      bottom: 0;
      height: 3rem;
    }
  }
</style>
