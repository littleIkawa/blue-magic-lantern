<script>
  import IndexBar from "@/components/IndexBar.svelte";

  const indexList = [
    { name: "test1", href: "/works/ekimemo" },
    { name: "test2", href: "/works/test2" },
  ];
</script>

<h2>Works</h2>

作品などを掲載します。
<IndexBar {indexList} />

<slot />
