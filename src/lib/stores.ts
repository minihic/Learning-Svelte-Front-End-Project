import { writable } from "svelte/store";

export enum ElementLayer {
    marker1 = "marker1",
    polygon = "polygon",
    marker2 = "marker2"
  }
  
  export const activeElementLayers = writable<Record<ElementLayer, boolean>>({
    [ElementLayer.marker1]: false,
    [ElementLayer.polygon]: false,
    [ElementLayer.marker2]: false,
  });
  