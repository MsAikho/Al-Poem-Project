function generatorForm(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poems");

  new Typewriter("#poems", {
    strings: "Demain, dès l’aube, à l’heure où blanchit la campagne,",
    autoStart: true,
    Delay: 1,
    currsor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorForm);
