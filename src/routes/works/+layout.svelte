<script lang="ts">
  import IndexBar from "@/components/IndexBar.svelte";

  const indexList = [
    { name: "駅メモ", href: "/works/ekimemo" },
    { name: "Arcaea", href: "/works/arcaea" },
  ];
</script>

<h2>Works</h2>

作品などを掲載します。
<IndexBar {indexList} />

<slot />
