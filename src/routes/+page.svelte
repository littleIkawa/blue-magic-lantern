<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Blue Magic Lantern</title>
</svelte:head>

<div class="title-container">
  <h1 class="title">Blue Magic Lantern</h1>
  <p class="subtitle">Waka's profile website</p>
</div>
<div class="contents">
  <section class="profile-section section-item">
    <h2 id="profile">Profile</h2>
    <div class="my-icon-col">
      <img class="icon" src={`${base}/img/glass.png`} alt="profile icon" />
    </div>
    <div class="text-col">
      <ul class="profile-data">
        <li>Nickname: Waka</li>
        <li>Location: Japan, Nara</li>
      </ul>
      <p>絵を描いたり曲を作ったりコードを書いたり、遊ぶことが好きです。</p>
    </div>
  </section>
</div>

<style>
  .title-container {
    min-width: 100%;
    width: 20rem;
    letter-spacing: 0.7rem;
    font-size: 3.2rem;
    font-weight: 800;
  }
  p {
    margin: 2rem auto;
  }
  .contents {
    padding: 4rem 2rem;
  }
  #profile {
    width: 100%;
  }
  .profile-section {
    display: flex;
    flex-wrap: wrap;
  }
  .my-icon-col {
    overflow: hidden;
    width: 20%;
    margin: auto;
  }
  .my-icon-col .icon {
    border-radius: 30rem;
    width: 90%;
    object-fit: contain;
  }
  .text-col {
    width: 70%;
  }
  ul[class] {
    margin: 1rem auto;
    margin-bottom: 2rem;
    list-style: disc;
    padding: 0rem 2rem;
  }
</style>
