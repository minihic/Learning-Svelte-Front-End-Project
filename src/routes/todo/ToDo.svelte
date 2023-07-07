<script lang="ts">
    let todo: { id: number; completed: boolean; name: string };
    export let todos: (typeof todo)[];
    let filteredTodos: (typeof todo)[];

    //Todos properties
    $: totalTodos = todos.length;
    $: completedTodos = todos.filter((todo) => todo.completed).length;

    //Adding a todo
    let newTodoName: string = "";
    $: newTodoid = Math.max(...todos.map((todo) => todo.id)) + 1;

    function add() {
        todos = [
            ...todos,
            { id: newTodoid, name: newTodoName, completed: false },
        ];
        console.log(todos);
        newTodoName = "";
    }

    //Removing a Todo
    function remove(todo: { id: number; name?: string; completed?: boolean }) {
        todos = todos.filter((t) => t.id !== todo.id);
    }

    //Filter Todos
    let filterState: "all" | "completed" | "not completed";
    $: {
        switch (filterState) {
            case "all":
                filteredTodos = todos;
                break;
            case "completed":
                filteredTodos = todos.filter((todo) => todo.completed);
                break;
            case "not completed":
                filteredTodos = todos.filter((todo) => !todo.completed);
                break;
        }
    }
</script>

<div class="flex flex-col">
    <h1 class="flex p-1 text-lg font-bold justify-center">Your List</h1>

    <div class="flex py-3 flex-row justify-between">
        <button
            class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
            on:click={() => (filterState = "all")}
        >
            <span>All</span>
        </button>
        <button
            class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
            on:click={() => (filterState = "not completed")}
        >
            <span>Active</span>
        </button>
        <button
            class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
            on:click={() => (filterState = "completed")}
        >
            <span>Completed</span>
        </button>
    </div>

    <h1 class="flex p-2 text-lg justify-center">
        {completedTodos} out of {totalTodos} items completed
    </h1>

    <ul>
        {#each todos as todo, index (todo.id)}
            <li class="p-1">
                <input
                    class="border border-slate-400"
                    type="checkbox"
                    on:click={() => (todo.completed = !todo.completed)}
                    checked={todo.completed}
                />
                <input type="text" bind:value={todo.name} />
                <button
                    class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
                    on:click={() => remove(todo)}>Delete</button
                >
            </li>
        {:else}
            Nothing left to do!
        {/each}

        <div class="flex mx-4 justify-center">
            <input
                class="border"
                type="text"
                bind:value={newTodoName}
                placeholder="New Todo"
            />
            <button
                class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
                on:click={() => add()}>Add</button
            >
        </div>
    </ul>

    <hr />

    <div class="flex py-3 flex-row justify-between">
        <button class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
            >Check all</button
        >
        <button class="p-1 px-3 m-1 rounded border border-stone-400 font-mono"
            >Remove completed</button
        >
    </div>
</div>
