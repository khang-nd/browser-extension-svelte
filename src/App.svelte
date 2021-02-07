<script>
  import browser from "webextension-polyfill";

  let image =
    "https://images.unsplash.com/photo-1586074299757-dc655f18518c?fit=crop&w=1268&q=80";

  function change() {
    browser.storage.local.set({ background: image });
  }
</script>

<main>
  Image URL: <input type="text" bind:value={image} />
  <button on:click={change}>Change</button>
</main>
