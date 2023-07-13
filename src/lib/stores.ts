import { writable } from "svelte/store";

export const activeMarkers = writable({
    marker1: false,
    marker2: false
})