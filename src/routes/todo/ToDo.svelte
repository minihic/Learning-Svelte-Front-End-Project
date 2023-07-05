<script lang="ts">
    let todo: { id: number; completed: boolean; name: string };
    export let todos: (typeof todo)[];
    
    //Todos properties
    $: totalTodos = todos.length;
    $: completedTodos = todos.filter(todo => todo.completed).length;

    //Adding a todo
    let newTodoName: string = "";
    $: newTodoid = Math.max(...(todos.map(todo => todo.id))) + 1;

    function add() {
        todos = [
            ...todos,
            { id: newTodoid, name: newTodoName, completed: false },
        ];
        console.log(todos)
        newTodoName = "";
    }

    //Removing a Todo
    function remove(todo: { id: number; name?: string; completed?: boolean }) {
        todos = todos.filter((t) => t.id !== todo.id);
    }

    //Filter Todos
    let filterState: string = "all";
    let displayedTodos = todos.map(todo)


</script>

<div>
    <div>
        <button on:click={() => filterState = "all"}>
            <span>All</span>
        </button>
        <button on:click={() => filterState = "active"}>
            <span>Active</span>
        </button>
        <button on:click={() => filterState = "completed"}>
            <span>Completed</span>
        </button>
    </div>

    <h2>{completedTodos} out of {totalTodos} items completed</h2>

    <ul>
        {#each todos as todo, index (todo.id)}
            <li>
                    <input
                        type="checkbox"
                        on:click={() => (todo.completed = !todo.completed)}
                        checked={todo.completed}
                    />
                    <input type="text" bind:value={todo.name} />
                    <button on:click={() => remove(todo)}>Delete</button>
            </li>
        {:else}
            Nothing left to do!
        {/each}

        <div>
            <input
                type="text"
                bind:value={newTodoName}
                placeholder="New Todo"
            />
            <button on:click={() => add()}>Add</button>
        </div>
    </ul>

    <hr />

    <div>
        <button>Check all</button>
        <button>Remove completed</button>
    </div>
</div>
