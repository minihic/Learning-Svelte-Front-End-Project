<script lang="ts">
    import ToDo from "./ToDo.svelte";
    let todos = [{id: 0, name: "change me", completed: false}];
</script>

<ToDo { todos }></ToDo>