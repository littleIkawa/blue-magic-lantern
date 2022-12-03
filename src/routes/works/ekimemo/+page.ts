import type { PageLoad } from "@/../.svelte-kit/types/src/routes/works/ekimemo/$types.d";
import { base } from "$app/paths";
import type { EkimemoWorkData } from "@/lib/works/ekimemo";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`${base}/api/works/ekimemo?id=all`);
  const workList: EkimemoWorkData[] = await response.json();

  return {
    works: workList,
  };
};
