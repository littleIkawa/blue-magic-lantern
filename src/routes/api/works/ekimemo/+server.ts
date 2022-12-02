import { charaWorkDataList } from "$lib/works/ekimemo/index";
import type { RequestHandler } from "@/../.svelte-kit/types/src/routes/api/works/$types.d";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
  const charaId = url.searchParams.get("id");
  const list = charaWorkDataList.filter((data) => data.charaId === charaId);

  // 文字列で取得された日付データを日付オブジェクトに変換した上でソート（昇順）
  const sortedData = list.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

  // 日付を文字列として保持するjson形式レスポンスを返す
  return json(sortedData);
};
