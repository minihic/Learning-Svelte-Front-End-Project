<script lang="ts">
    export let clicked: () => void;
</script>

<button class="btn p-6 m-0.5 rounded-sm border border-stone-400" on:click={clicked}>
    <slot></slot>
</button>

<style>
    .keyValue {
        grid-column: span;
        padding: 22px 20px;
        margin: 0;
        font-size: 16px;
    }
</style>