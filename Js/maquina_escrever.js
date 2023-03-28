const meuNome = document.querySelector(".myName");
const fName = meuNome.innerHTML;
meuNome.innerHTML = "";

let index = 0;
const texts = [fName, "JavaScript", "Node", "SQL"];

function typeWriter(string) {
  const meuNomeF = string.split("");
  meuNome.innerHTML = "";
  meuNomeF.forEach((letra, index) => {
    setTimeout(function () {
      meuNome.innerHTML += letra;
    }, 150 * index);
  });
}

typeWriter(texts[index]);
index++;

setInterval(() => {
  typeWriter(texts[index]);
  index++;
  if (index >= texts.length) {
    index = 0;
  }
}, 4000);

