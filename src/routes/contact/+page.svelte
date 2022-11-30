<script>
  import ServiceIcon from "@/components/ServiceIcon.svelte";
</script>

<section class="contact-section section-item">
  <h2 id="contact">Contact</h2>
  <span>
    お問い合わせはメールか,
    TwitterのDMにてお願いいたします。（メールは現在リンクを貼っていませんのでお手数ですが手動でご連絡ください。将来的にフォームを用意する予定です。）
  </span>
  <table class="contact-table">
    <tbody>
      <tr>
        <th>Mail</th>
        <td> Kw.I.KU.2525@gmail.com </td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td>
          <a href="https://twitter.com/wakka141" target="_blank" rel="noopener noreferrer">
            @wakka141
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="contact-container">
    <div class="contact-item mail">
      <ServiceIcon name="gmail" size="large" />
      <span>Mail</span>
    </div>

    <a href="https://twitter.com/wakka141" target="_blank" rel="noopener noreferrer">
      <div class="contact-item twitter">
        <ServiceIcon name="twitter" size="large" />
        <span>Twitter</span>
      </div>
    </a>
  </div>
</section>

<style>
  .contact-table {
    border-collapse: collapse;
    margin: 1rem 2rem;
  }
  .contact-table tr {
    border-top: 1px solid var(--main-font-color);
    border-bottom: 1px solid var(--main-font-color);
  }
  .contact-table th,
  td {
    text-align: left;
    padding: 1rem 2rem;
  }
  @media (max-width: 1024px) {
    .contact-table {
      margin: 1rem auto;
    }
    .contact-table th,
    td {
      padding: 1rem 0.4rem;
    }
  }

  .contact-container {
    display: flex;
    margin: 7rem auto;
    justify-content: center;
  }
  .contact-item {
    display: flex;
    margin: auto 2rem;
    flex-direction: column;
    align-items: center;
  }
</style>
