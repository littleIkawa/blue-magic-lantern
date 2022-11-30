<script lang="ts">
  import { base } from "$app/paths";
  import type { AllowedName } from "@/components/allowdServiceName";

  export let name: AllowedName;
  export let size = "normal";

  const getSvgUrl = (serviceName: AllowedName) => {
    switch (serviceName) {
      case "github":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
      case "svelte":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg";
      case "twitter":
        return `${base}/img/icon/twitter.svg`;
      case "gmail":
        return `${base}/img/icon/google-gmail.svg`;
      default:
        return "";
    }
  };

  const getSize = (sizeStr: string) => {
    switch (sizeStr) {
      case "normal":
        return "4rem";
      case "small":
        return "3rem";
      case "large":
        return "6rem";
      default:
        return sizeStr;
    }
  };

  $: svgUrl = getSvgUrl(name);
  $: computedSize = getSize(size);
</script>

<div class="service-icon">
  <img
    class="icon-img"
    src={svgUrl}
    style:width={computedSize}
    style:height={computedSize}
    alt={`icon-${name}`}
  />
</div>

<style>
  .service-icon {
    display: inline-block;
    vertical-align: sub;
  }
</style>
