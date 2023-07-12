<script lang="js">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import Button from "./Button.svelte";

  // @ts-ignore
  let map;
  // @ts-ignore
  let mapElement;

  onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            // @ts-ignore
            map = leaflet.map(mapElement).setView([49.787096845994895, 6.131346063299729], 10);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            leaflet.marker([49.61165613164213, 6.13193403682879]).addTo(map)
                .bindPopup('<Button>Luxembourg<Button/>');
        }
    });

    onDestroy(async () => {
        // @ts-ignore
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>

  <div bind:this={mapElement} id="map" />

<style>
  /* css required! */
  @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
  #map {
    /* width: calc(100vw - 420px) ; */
    width: 100%;
    height: 100%;
  }
</style>
