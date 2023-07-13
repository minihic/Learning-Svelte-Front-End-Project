<script lang="ts">
    import { base } from "$app/paths";

    export let path: string;
    export let name: string;
</script>

<li>

    <button class="btn p-2 m-1 rounded-sm border-l border-stone-400 from-stone-950 font-normal font-sans hover:border-l-4 hover:font-medium" >
        <a href="{base}/{path}">{name}</a>
    </button>
    

</li>
