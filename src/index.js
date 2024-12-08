function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poems", {
    strings: response.data.answer,
    autoStart: true,
    Delay: 1,
    currsor: "",
  });
}

function generatorForm(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");

  let apiKey = "32b37e6231bf7tb9f483785a00o2c334";
  let prompt = `User instruction:Generate a French poem about ${instructionInput.value}`;
  let context =
    "You are a romentic poem expect and love to write short poem.your mission is to generator a 4 lines poem in basic HTML.make sure to follow the user instruction. Do not include a tittle to the poem. Sign the poem with 'SheCodes AI'inside a <strong>element</strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=32b37e6231bf7tb9f483785a00o2c334`;

  let poemElement = document.querySelector("#poems");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating a French poem ${instructionInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt${prompt}`);
  console.log(`Context${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorForm);
