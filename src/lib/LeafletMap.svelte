<script lang="ts">
  import * as L from "leaflet?client";
  import { onMount, onDestroy } from "svelte";
  import { activeMarkers } from "./stores";

  let map: any;
  let initialViewPosition = {
    lat: 49.61165613164213,
    lng: 6.13193403682879,
  };
  let zoom = 10;

  $: toggleMarker($activeMarkers.marker1);

  let marker1 = L.marker([49.61165613164213, 6.13193403682879]);

  function toggleMarker(activeMarkers: boolean) {
    if (activeMarkers) {
      marker1.addTo(map).bindPopup("<Button>Luxembourg<Button/>");
      console.log("toggle on");
    } else if (!activeMarkers) {
      marker1.removeFrom(map);
      console.log("toggle off");
    }
  }

  onMount(() => {
    map = L.map("map").setView(initialViewPosition, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  });

  onDestroy(() => {
    if (map) {
      console.log("Unloading map.");
      map.remove();
    }
  });
</script>

<div id="map" />

<style>
  @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
  #map {
    width: 100%;
    height: 100%;
  }
</style>
