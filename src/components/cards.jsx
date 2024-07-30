import shuffle from "array-permutation/lib/shuffle";

import cat from "../gifs/cat.gif";
import dinosaur from "../gifs/dinosaur.gif";
import dog from "../gifs/dog.gif";
import elephant from "../gifs/elephant.gif";
import fox from "../gifs/fox.gif";
import giraffe from "../gifs/giraffe.gif";
import gorilla from "../gifs/gorilla.gif";
import horse from "../gifs/horse.gif";
import kangaroo from "../gifs/kangaroo.gif";
import ostrich from "../gifs/ostrich.gif";
import tiger from "../gifs/tiger.gif";
import turtle from "../gifs/turtle.gif";

import "array-permutation";

const animalGifs = [
  { gif: cat, name: "Cat" },
  { gif: dinosaur, name: "Dinosaur" },
  { gif: dog, name: "Dog" },
  { gif: elephant, name: "Elephant" },
  { gif: fox, name: "Fox" },
  { gif: giraffe, name: "Giraffe" },
  { gif: gorilla, name: "Gorilla" },
  { gif: horse, name: "Horse" },
  { gif: kangaroo, name: "Kangaroo" },
  { gif: ostrich, name: "Ostrich" },
  { gif: tiger, name: "Tiger" },
  { gif: turtle, name: "Turtle" },
];

export function CardContainer() {
  shuffle(animalGifs);
  const cards = [];
  for (let i = 0; i < animalGifs.length; i++) {
    cards.push(
      <Card key={i} gif={animalGifs[i].gif} name={animalGifs[i].name} />
    );
  }

  return <div className="container">{cards}</div>;
}

function Card({gif, name}) {
  return (
    <div className="card">
      <img src={gif} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
