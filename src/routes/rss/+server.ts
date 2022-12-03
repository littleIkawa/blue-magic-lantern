import type { ArticleAttributeJson } from "$lib/articles";
import { fetchMarkdownArticles } from "$lib/utils";

const siteURL = "https://littleikawa.github.io/blue-magic-lantern/";
const siteTitle = "Blue Magic Lantern";
const siteDescription = "Waka's profile and blog website";

export const prerender = true;

export const GET = async () => {
  const allArticles = await fetchMarkdownArticles();
  const sortedArticles = allArticles.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  const body = render(sortedArticles);
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
  };

  return new Response(body, options);
};

const render = (posts: ArticleAttributeJson[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.id}</guid>
<title>${post.title}</title>
<link>${siteURL}/blog/${post.id}</link>
<description>${post.title}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join("")}
</channel>
</rss>
`;
