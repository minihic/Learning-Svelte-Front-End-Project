<script lang="ts">
  import CalcKey from "./CalcKey.svelte";

  let numberInput = "";

  function addToInput(value: string | number) {
    numberInput += value;
  }

  const clear = () => {
    numberInput = "";
  };
</script>
  <section class="flex flex-col ">
    <div class="output" />

    <div class="b-b border-stone-400 h-24 p-6 ">
      
      {numberInput}
    </div>

    <div class="p-6 grid grid-cols-4 grid-rows-5">


      <CalcKey clicked={() => addToInput(7)}>7</CalcKey>
      <CalcKey clicked={() => addToInput(8)}>8</CalcKey>
      <CalcKey clicked={() => addToInput(9)}>9</CalcKey>
      <CalcKey clicked={() => addToInput("+")}>+</CalcKey>

      <CalcKey clicked={() => addToInput(4)}>4</CalcKey>
      <CalcKey clicked={() => addToInput(5)}>5</CalcKey>
      <CalcKey clicked={() => addToInput(6)}>6</CalcKey>
      <CalcKey clicked={() => addToInput("-")}>-</CalcKey>

      <CalcKey clicked={() => addToInput(1)}>1</CalcKey>
      <CalcKey clicked={() => addToInput(2)}>2</CalcKey>
      <CalcKey clicked={() => addToInput(3)}>3</CalcKey>
      <CalcKey clicked={() => addToInput("x")}>x</CalcKey>

      <CalcKey span={3} clicked={() => clear()}>clear</CalcKey>
      <CalcKey clicked={() => addToInput(0)}>0</CalcKey>
      <CalcKey clicked={() => addToInput("=")}>=</CalcKey>
      <CalcKey clicked={() => addToInput("/")}>/</CalcKey>
      

      
      
    </div>
  </section>
