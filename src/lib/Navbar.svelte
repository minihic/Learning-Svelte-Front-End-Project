<script lang="ts">

    import NavbarElement from "./NavbarElement.svelte";
    import { activeMarkers } from "./stores";

</script>
<nav class="flex flex-col resize-x w-72 p-2 pl-4 bg-stone-50 border-r">
    <ul class="p-2 first:text-stone-600 text-xl font-mono font-thin">
        <NavbarElement name="Todo App" path="todo"/>
        <NavbarElement name="Calculator" path="calculator"/>
        <NavbarElement name="Map" path="map"/>
    </ul>
    <ul>
        <button on:click={() => {$activeMarkers.marker1 = !$activeMarkers.marker1}}>
            <div>Select Markers</div>
        </button>
    </ul>
</nav>
