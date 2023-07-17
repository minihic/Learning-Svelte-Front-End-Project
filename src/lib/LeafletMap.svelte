<script lang="ts">
  import * as L from "leaflet?client";
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  import { marker1 } from "./stores";
  import { marker2 } from "./stores";
  import { polygon } from "./stores";
  import { layers } from "./stores";

  let map: any;
  let initialViewPosition = {
    lat: 49.61165613164213,
    lng: 6.13193403682879,
  };
  let layerMarker1: L.Marker<any>;
  let layerMarker2: L.Marker<any>;
  let layerPolygon: L.Polygon<any>;

  


  $: updateMarker(layerMarker1, $marker1)

  $: updateMarker(layerMarker2, $marker2)

  $: updateMarker(layerPolygon, $polygon)

  function updateMarker(marker: any, visibility: boolean) {
    if (marker === undefined) {return};
    if (visibility) {
      marker.addTo(map);
    } else {
      marker.removeFrom(map);
    }
  }

  onMount(async () => {
    if (browser) {
      map = L.map("map").setView(initialViewPosition, 10);

      layerMarker1 = L.marker([49.61165613164213, 6.13193403682879]);

      layerMarker2 = L.marker([49.502429244559984, 5.9721199515772385]);

      layerPolygon = L.polygon([
        [49.4608010467194, 6.365158852783711],
        [49.4608010467194, 6.09218419978945],
        [49.538362937091975, 5.822621729957617],
        [49.726215941369766, 5.880628843718897],
        [49.895763541678065, 5.754378066709052],
        [50.16536804718939, 5.955696872719614],
        [50.13694477598482, 6.133130397165884],
        [49.93750862614185, 6.204786243576878],
        [49.809963012862326, 6.528943644007564],
        [49.620223294527285, 6.412929416485002],
      ]);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  });

  onDestroy(async () => {
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
