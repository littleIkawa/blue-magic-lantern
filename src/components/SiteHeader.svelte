<script lang="ts">
  import PageLink from "@/components/PageLink.svelte";
  import { base } from "$app/paths";

  interface NavLink {
    name: string;
    href: string;
  }
  // 表示名とリンクを並べる
  const navLinkList: NavLink[] = [
    { name: "TOP", href: "/" },
    { name: "WORKS", href: "/works" },
    { name: "CONTACT", href: "/contact" },
    { name: "BLOG", href: "/blog" },
  ];
</script>

<div id="website-header">
  <div class="title-block">
    <a href={base + "/"}>
      <span class="site-icon">
        <img src={`${base}/img/site-icon.png`} alt="site-icon" />
      </span>
      <h1 class="title">Blue Magic Lantern</h1>
    </a>
  </div>
  <nav>
    <div class="nav-link-wrapper">
      {#each navLinkList as navLink}
        <PageLink href={base + navLink.href}>{navLink.name}</PageLink>
      {/each}
    </div>
  </nav>
</div>

<style>
  #website-header {
    z-index: 9950;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 8rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(36, 30, 90, 0.8);
    backdrop-filter: blur(1rem);
    border-bottom: 2px solid darkslateblue;
  }
  @media (max-width: 1024px) {
    #website-header {
      flex-direction: column;
      height: calc(8rem + 3rem);
      border-bottom: 2px solid slateblue;
    }
  }

  .title-block {
    margin: 0.2rem 2rem;
    font-family: "Noto Serif JP", serif;
  }
  .title-block > a {
    display: flex;
  }
  @media (max-width: 1024px) {
    .title-block {
      margin: 0 2rem;
    }
  }
  .site-icon {
    height: 6rem;
    width: 6rem;
    display: block;
    margin: auto 1.1rem;
    border-radius: 100%;
    border: 3px solid slateblue;
    overflow: hidden;
  }
  .site-icon > img {
    height: 100%;
    width: 100%;
  }
  .title {
    display: block;
    color: azure;
    font-size: 3.6rem;
    line-height: 8rem;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    #website-header .title {
      font-size: 2.2rem;
    }
  }

  /* @media (max-width: 1024px) {
    nav {
      scrollbar-width: none;
    }
  } */
  nav .nav-link-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 1.4rem;
    margin-right: 3.4rem;
    width: fit-content;
  }
  @media (max-width: 1024px) {
    nav .nav-link-wrapper {
      position: relative;
      /* top: 0; */
      bottom: 0;
      height: 3rem;
    }
  }
</style>
