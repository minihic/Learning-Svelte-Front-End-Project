<script lang="ts">
    import { base } from "$app/paths";
    import Button from "$lib/Button.svelte";

    export let path: string;
    export let name: string;
</script>

<li>
    <Button>
        <a href="{base}/{path}">{name}</a>
    </Button>
</li>
