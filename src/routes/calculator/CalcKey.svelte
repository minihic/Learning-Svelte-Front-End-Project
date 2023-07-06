<script lang="ts">
    export let clicked: () => void;
    export let span= 1;
</script>

<button class="btn p-6 m-0.5 rounded-sm border col-span-{span} border-stone-400" on:click={clicked}>
    <slot></slot>
</button>
