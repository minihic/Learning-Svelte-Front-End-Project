<script>
  export const prerender = true;
  import "../app.css";
  import Header from "./Header.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="flex flex-col h-screen text-stone-800 bg-stone-50">
  <Header />

  <div class="flex flex-row h-screen">
    <Navbar />

    <div class="flex flex-col  w-screen">
      <div id="content" class="flex flex-auto justify-center p-8">
        <slot />
      </div>
    </div>

    
  </div>

  <footer class="p-2 pl-4 bg-stone-900 border-slate-400 border-t text-slate-50 font-mono font-thin">
    <p>Test Project App - 2023</p>
  </footer>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
