<script lang="ts">
  import { base } from "$app/paths";
  import PictureCard from "@/components/PictureCard.svelte";
  import { characterList, type EkimemoCharacter, type EkimemoWorkData } from "@/lib/works/ekimemo";

  $: selectedCharacterIdx = characterList.length;
  let selectedCharacter: EkimemoCharacter | null;
  $: if (characterList[selectedCharacterIdx] !== undefined) {
    selectedCharacter = characterList[selectedCharacterIdx];
  } else {
    selectedCharacter = null;
  }
  $: {
    if (selectedCharacter) {
      getCharaWorks(selectedCharacter.id);
    }
  }

  let charaWorks: EkimemoWorkData[];
  $: charaWorks = [];
  const getCharaWorks = async (id: string) => {
    const response = await fetch(`${base}/api/works/ekimemo?id=${id}`);
    const worksList: EkimemoWorkData[] = await response.json();
    charaWorks = worksList;
  };
</script>

<h3>駅メモの絵</h3>

<h4>キャラクター一枚絵</h4>
以下のリストから選ぶと作品を表示します。

<label for="ekimemo-character">キャラクター</label>
<select id="ekimemo-character" bind:value={selectedCharacterIdx}>
  <option value={characterList.length}>---</option>
  {#each characterList as character, idx (character.id)}
    <option value={idx}>
      {character.name}
    </option>
  {/each}
</select>

<div class="gallery-container">
  {#each charaWorks as work}
    <PictureCard path={`works/${work.path}`} width={"40%"} alt={work.charaId} />
  {/each}
</div>

<style>
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
