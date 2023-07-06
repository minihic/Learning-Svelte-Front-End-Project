<script>
  import "../app.css";
  import Header from "./Header.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="flex flex-col h-screen text-stone-800 bg-stone-50">

  <Header />

  <div class="flex flex-row h-screen">
    <Navbar />

    <div class="flex flex-col w-screen">

      <div id="content" class="flex flex-auto p-4">
        <slot />
      </div>
  
      <footer class="p-2 bg-stone-900 border-slate-400 border-t text-slate-50">
        <p>footer here</p>
      </footer>

    </div>
    

  </div>

</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
