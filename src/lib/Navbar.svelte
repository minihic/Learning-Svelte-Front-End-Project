<script lang="ts">
    import NavbarElement from "./NavbarElement.svelte";
    import { marker1 } from "./stores";
    import { marker2 } from "./stores";
    import { polygon } from "./stores";
</script>

<nav class="flex flex-col resize-x w-72 p-2 pl-4 bg-stone-50 border-r">
    <ul class="p-2 first:text-stone-600 text-xl font-mono font-thin">
        <NavbarElement name="Todo App" path="todo" />
        <NavbarElement name="Calculator" path="calculator" />
        <NavbarElement name="Map" path="map" />
    </ul>
    <ul>
        <li>
            <button
                on:click={() => {
                    $marker1 = !$marker1;
                }}
            >
                <div>Marker 1</div>
            </button>
        </li>
        <li>
            <button
                on:click={() => {
                    $marker2 = !$marker2;
                }}
            >
                <div>Marker 2</div>
            </button>
        </li>
        <li>
            <button
                on:click={() => {
                    $polygon = !$polygon;
                }}
            >
                <div>Polygon</div>
            </button>
        </li>
    </ul>
</nav>
