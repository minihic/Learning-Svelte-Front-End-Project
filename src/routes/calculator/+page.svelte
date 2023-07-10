<script lang="ts">
  import CalcKey from "./CalcKey.svelte";

  let numberInput: string = "";
  let numberOutput: number | undefined;

  function addToInput(value: string | number) {
    numberInput += value;
  }

  const clear = () => {
    numberInput = "";
  };

  function calculate(input: string) {
    const operators = new Set(["+", "-", "x", "/"]);
    let stackLeft: string = "";
    let stackRight: string = "";
    let side: boolean = false;
    let calcOp: string = "";

    for (let i = 0; i < input.length; i++) {
      let char: string = input[i];
      console.log(char)
      if (side === true){
        stackRight += char;
      }
      if (operators.has(char)) {
        side = true;
        calcOp = input[i];
      }
      if (side === false) {
        stackLeft += char;
      }
      
    }
    console.log(stackLeft, stackRight);
    console.log(calcOp)

    switch (calcOp) {
      case "+":
        numberOutput = Number(stackLeft) + Number(stackRight);
        break;
      case "-":
        numberOutput = Number(stackLeft) - Number(stackRight);
        break;
      case "x":
        numberOutput = Number(stackLeft) * Number(stackRight);
        break;
      case "/":
        numberOutput = Number(stackLeft) / Number(stackRight);
        break;
      default:
        numberOutput = Number(stackLeft);
    }

    console.log(numberOutput);
    return numberOutput;
  }
</script>

<section class="flex flex-col">
  <div class="b-b border-stone-400 h-24 p-6">
    {numberOutput}
  </div>

  <div class="b-b border-stone-400 h-24 p-6">
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

    <CalcKey clicked={() => clear()}>clear</CalcKey>
    <CalcKey clicked={() => addToInput(0)}>0</CalcKey>
    <CalcKey clicked={() => calculate(numberInput)}>=</CalcKey>
    <CalcKey clicked={() => addToInput("/")}>/</CalcKey>
  </div>
</section>
