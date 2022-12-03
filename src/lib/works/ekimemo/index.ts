import type { WorkData } from "$lib/works";
// 駅メモのキャラクター情報

export interface EkimemoCharacter {
  // 画像名とかに使う
  id: string;
  // こっちは日本語でのちゃんとしたキャラの名前
  name: string;
}

export const characterList: EkimemoCharacter[] = [
  { id: "miyabi", name: "桂みやび" },
  { id: "naho", name: "豊栄なほ" },
  { id: "tsumugi", name: "根雨つむぎ" },
  { id: "wakana", name: "生駒わかな" },
  { id: "iroha", name: "象潟いろは" },
  { id: "naru", name: "海部なる" },
  { id: "kanon", name: "阿佐ヶ谷カノン" },
];

export interface EkimemoWorkData extends WorkData {
  charaId: string;
}

// キャラごとの絵をここで並べる
export const charaWorkDataList: EkimemoWorkData[] = [
  { charaId: "miyabi", path: "ekimemo/miyabi_1.png", date: "2022-08-11" },
  { charaId: "miyabi", path: "ekimemo/miyabi_2.png", date: "2022-08-11" },
  { charaId: "miyabi", path: "ekimemo/miyabi_3.png", date: "2022-08-11" },
  { charaId: "miyabi", path: "ekimemo/miyabi_4.png", date: "2022-08-11" },
  { charaId: "naho", path: "ekimemo/naho_1.png", date: "2022-08-11" },
  { charaId: "naho", path: "ekimemo/naho_2.png", date: "2022-08-11" },
  { charaId: "wakana", path: "ekimemo/wakana_1.png", date: "2022-08-11" },
  { charaId: "wakana", path: "ekimemo/wakana_2.png", date: "2022-08-11" },
  { charaId: "asuka", path: "ekimemo/asuka_1.png", date: "2022-08-11" },
  { charaId: "iroha", path: "ekimemo/iroha_1.png", date: "2022-08-11" },
  { charaId: "tsumugi", path: "ekimemo/tsumugi_1.png", date: "2022-08-11" },
  { charaId: "naru", path: "ekimemo/naru_1.png", date: "2022-08-11" },
  { charaId: "kanon", path: "ekimemo/kanon_1.png", date: "2022-08-11" },
];

// その他の一枚絵はここ
export const workDataList: WorkData[] = [{ path: "ekimemo/fall.png", date: "2022-09-11" }];
