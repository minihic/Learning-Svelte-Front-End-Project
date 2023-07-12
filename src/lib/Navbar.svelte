<script>

    import NavbarElement from "./NavbarElement.svelte";

</script>
<nav class="flex flex-col resize-x w-72 p-2 pl-4 bg-stone-50 border-r">
    <ul class="p-2 first:text-stone-600 text-xl font-mono font-thin">
        <NavbarElement name="Todo App" path="todo"/>
        <NavbarElement name="Calculator" path="calculator"/>
        <NavbarElement name="Map" path="map"/>
    </ul>
    <ul>
        <div>Select Markers</div>
    </ul>
</nav>
