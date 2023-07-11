<script lang="ts">
  import { onMount } from "svelte";

  import L from 'leaflet?client';

  let map;
  let initialViewPosition = {
    lat: 37.57,
    lng: 126.983,
  };
  let zoom = 17;

  onMount(() => {
    map = L.map("map", {
      minZoom: 12,
      maxZoom: 18,
      zoomControl: false,
      closePopupOnClick: false,
    }).setView(initialViewPosition, zoom);

    // base map 'OpenStreetMap'
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
</script>

<div>
  <div id="map" />
</div>

<style>
  /* css required! */
  @import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
  #map {
    /* width: calc(100vw - 420px) ; */
    width: 100%;
    height: 420px;
  }
</style>
