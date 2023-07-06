<script>
    import "../app.css";
    import Header from "./Header.svelte";
    import Navbar from "./Navbar.svelte";
</script>
  
<div class="flex flex-col h-screen">

  <Header/>

  <div class="flex flex-grow justify-between w-screen">

      <Navbar/>

      <div id="content" class=" w-screen border-black border-4">
          <slot />
      </div>

  </div>

  <footer
      class="footer bottom-0 p-4 bg-neutral-50 text-neutral-content border-black border-4"
  >
      <p>footer here</p>
  </footer>

</div>

<style lang="postcss">
  :global(html) {
      background-color: theme(colors.gray.100);
  }
</style>
