<script lang="ts">
  import { spring } from "svelte/motion";
  import { blur } from "svelte/transition";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import type { LayoutData } from "./$types";
  import SiteFooter from "@/components/SiteFooter.svelte";
  import SiteHeader from "@/components/SiteHeader.svelte";
  import { afterNavigate } from "$app/navigation";
  import Analytics from "@/components/analytics/Analytics.svelte";

  $: ogp = {
    url: $page.url.toString(),
  };

  export let data: LayoutData;

  // カスタムカーソルのために3つのバネ挙動ストアを用意する（位置の初期値は適当）.
  let cursorPos1 = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.4 });
  let cursorPos2 = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.2 });
  let cursorSize = spring(2, { stiffness: 0.05, damping: 0.1 });

  // リンクの上にあるかどうかのフラグ
  $: onLinkTag = false;
  // このフラグに連動してサイズをセットする
  $: if (onLinkTag) {
    cursorSize.set(4);
  } else {
    cursorSize.set(2);
  }
  // サイズを使ってスタイルに使う文字列を定義する
  $: sizeStr1 = `${$cursorSize}rem`;
  $: sizeStr2 = `${$cursorSize * 2}rem`;

  // ホバー時にフラグを書き換えるコールバック関数
  // 一行で書くために{}をつけない形式なのでbooleanが返るようになっているが特に使わない
  const activateLink = () => (onLinkTag = true);
  const deactivateLink = () => (onLinkTag = false);

  // aタグ全部にホバー時のイベントリスナを付与する.
  // NOTE: Svelte側でページ遷移時に任意のタグに対してイベントを付与できればいいがわからなかった.
  const setLinkHoverEvent = () => {
    if (browser) {
      const tags = document.getElementsByTagName("a");
      for (const tag of tags) {
        // 例えばナビゲーションリンク等にイベントリスナが溜まってしまわないように必ず解除動作をする.
        // 関連するイベントがセットされていないなら何も起こらないので問題ない.
        tag.removeEventListener("mouseenter", activateLink);
        tag.removeEventListener("mouseenter", deactivateLink);
        tag.addEventListener("mouseenter", activateLink);
        tag.addEventListener("mouseleave", deactivateLink);
      }
    }
  };

  // ナビゲーション完了時にリスナ付与を実行
  afterNavigate(setLinkHoverEvent);
</script>

<Analytics />

<svelte:head>
  <link rel="stylesheet" href={`${base}/style/main.css`} />
  <!-- ブログの個別ページでは別の画像や説明を設定するため除外する -->
  {#if $page.route.id !== `/blog/[slug]`}
    <meta property="og:url" content={ogp.url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Blue Magic Lantern" />
    <meta property="og:description" content="Waka's Website" />
    <meta property="og:site_name" content="Blue Magic Lantern" />
    <meta
      property="og:image"
      content="https://littleikawa.github.io/blue-magic-lantern/img/site-icon.png"
    />
    <meta name="twitter:card" content="summary" />
  {/if}
</svelte:head>

<!-- body上でマウスを動かしたら位置がセットされる -->
<svelte:body
  on:mousemove={(e) => {
    cursorPos1.set({ x: e.clientX, y: e.clientY });
    cursorPos2.set({ x: e.clientX, y: e.clientY });
  }}
/>

<div class="cursor">
  <span
    class="dot1"
    class:active={onLinkTag}
    style:left={`${$cursorPos1.x}px`}
    style:top={`${$cursorPos1.y}px`}
    style:width={sizeStr1}
    style:height={sizeStr1}
  />
  <span
    class="dot2"
    class:active={onLinkTag}
    style:left={`${$cursorPos2.x}px`}
    style:top={`${$cursorPos2.y}px`}
    style:width={sizeStr2}
    style:height={sizeStr2}
  />
</div>

<SiteHeader />
<div class="header-margin" />
{#key data.currentRoute}
  <main class="main-container" in:blur={{ duration: 250, delay: 50 }} out:blur={{ duration: 250 }}>
    <slot />
  </main>
{/key}
<SiteFooter />

<style>
  :global(*) {
    /* カーソルを別のスタイルに変更するため */
    cursor: none;
  }
  .header-margin {
    height: 13rem;
  }
  .main-container {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 1024px) {
    .main-container {
      width: 85%;
    }
  }
  @media (max-width: 1024px), (hover: none), (pointer: none) {
    .cursor {
      display: none;
    }
  }
  .cursor span {
    position: fixed;
    display: block;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
    /* mix-blend-mode: exclusion; */
    mix-blend-mode: luminosity;
  }
  .cursor span.dot1 {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: skyblue;
    backdrop-filter: blur(0.1rem);
  }
  .cursor span.dot1.active {
    border: 2px solid azure;
    background-color: skyblue;
  }
  .cursor span.dot2 {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    border: 1px solid darkslateblue;
    background-color: transparent;
  }
</style>
