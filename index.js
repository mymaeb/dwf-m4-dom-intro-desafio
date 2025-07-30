const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const elmLi = document.querySelectorAll(".lista li");

  EliminarLi();

  function EliminarLi () {
    for (let i = 0; i < elmLi.length; i++) {
      elmLi[i].remove();
    }
  }

  crearLi();

  function crearLi () {
    for (let i = 0; i < cosasQueAprendimos.length; i++) {
      const li = document.createElement("li");
      li.className = cosasQueAprendimos[i].class;
      li.textContent = cosasQueAprendimos[i].tema;
      document.querySelector(".lista").appendChild(li);
    }
  }  
}

main();