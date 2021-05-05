import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt dog"),
    React.createElement(Pet, {
      name: "Max",
      animal: "dog",
      breed: "Sausage Dog",
    }),
    React.createElement(Pet, {
      name: "El",
      animal: "Cat",
      breed: "Leopard",
    }),
    React.createElement(Pet, {
      name: "Sam",
      animal: "Bird",
      breed: "Pigeon",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
