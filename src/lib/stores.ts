import { writable, type Writable } from "svelte/store";

export const marker1 = writable(false);

export const marker2 = writable(false);

export const polygon = writable(false);

export const layers: Writable<Array<Layer>> = writable([])

type Layer = {id: number, value: boolean, name: string}