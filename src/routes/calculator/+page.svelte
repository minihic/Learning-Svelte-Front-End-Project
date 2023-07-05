<script lang="ts">
    import CalcKey from "./CalcKey.svelte";

    let numberInput = "";

    function addToInput(value: string | number) { 
		numberInput += value
	}

    const clear = () => {
        numberInput = "";
    }
</script>

<section class="calculator">
    <div class="output">

    </div>

    <div class="calc-input">
        {numberInput}
    </div>

    <div class="input-pad">
        <CalcKey clicked={() => addToInput(7)}>7</CalcKey>
        <CalcKey clicked={() => addToInput(8)}>8</CalcKey>
        <CalcKey clicked={() => addToInput(9)}>9</CalcKey>
        <CalcKey clicked={() => addToInput('+')}>+</CalcKey>

        <CalcKey clicked={() => addToInput(4)}>4</CalcKey>
        <CalcKey clicked={() => addToInput(5)}>5</CalcKey>
        <CalcKey clicked={() => addToInput(6)}>6</CalcKey>
        <CalcKey clicked={() => addToInput('-')}>-</CalcKey>

        <CalcKey clicked={() => addToInput(1)}>1</CalcKey>
        <CalcKey clicked={() => addToInput(2)}>2</CalcKey>
        <CalcKey clicked={() => addToInput(3)}>3</CalcKey>
        <CalcKey clicked={() => addToInput('x')}>x</CalcKey>

        <CalcKey clicked={() => clear()}>clear</CalcKey>
        <CalcKey clicked={() => addToInput(0)}>0</CalcKey>
        <CalcKey clicked={() => addToInput('.')}>.</CalcKey>
        <CalcKey clicked={() => addToInput('/')}>/</CalcKey>

    </div>
</section>

<style>
.calculator {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1.7fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "output"
    "input-pad";
}

.output { grid-area: output; }

.input-pad {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "calc-input calc-input calc-input ."
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . .";
  grid-area: input-pad;
}

.calc-input { grid-area: calc-input; }

</style>
