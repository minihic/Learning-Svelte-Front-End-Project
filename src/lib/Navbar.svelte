<script lang="ts">

    import NavbarElement from "./NavbarElement.svelte";
    import { activeElementLayers } from "./stores";

</script>
<nav class="flex flex-col resize-x w-72 p-2 pl-4 bg-stone-50 border-r">
    <ul class="p-2 first:text-stone-600 text-xl font-mono font-thin">
        <NavbarElement name="Todo App" path="todo"/>
        <NavbarElement name="Calculator" path="calculator"/>
        <NavbarElement name="Map" path="map"/>
    </ul>
    <ul>
        <button on:click={() => {$activeElementLayers.marker1 = !$activeElementLayers.marker1}}>
            <div>Marker 1</div>
        </button>
        <button on:click={() => {$activeElementLayers.marker2 = !$activeElementLayers.marker2}}>
            <div>Marker 2</div>
        </button>
        <button on:click={() => {$activeElementLayers.polygon = !$activeElementLayers.polygon}}>
            <div>Polygon</div>
        </button>
    </ul>
</nav>
