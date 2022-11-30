import type { LayoutLoad } from "@/../.svelte-kit/types/src/routes/$types.d";
export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
  const currentRoute = url.pathname;

  return {
    currentRoute,
  };
};
