import shuffle from "array-permutation/lib/shuffle";
import {useState} from "react";

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
  { gif: cat, name: "Cat", clicked: false },
  { gif: dinosaur, name: "Dinosaur", clicked: false },
  { gif: dog, name: "Dog", clicked: false },
  { gif: elephant, name: "Elephant", clicked: false },
  { gif: fox, name: "Fox", clicked: false },
  { gif: giraffe, name: "Giraffe", clicked: false },
  { gif: gorilla, name: "Gorilla", clicked: false },
  { gif: horse, name: "Horse", clicked: false },
  { gif: kangaroo, name: "Kangaroo", clicked: false },
  { gif: ostrich, name: "Ostrich", clicked: false },
  { gif: tiger, name: "Tiger", clicked: false },
  { gif: turtle, name: "Turtle", clicked: false },
];

export function CardContainer() {
  const [data, setData] = useState(animalGifs);
  let newData = data;
  
  shuffle(newData);
  const cards = [];
  for (let i = 0; i < newData.length; i++) {
    cards.push(
      <Card key={i} gif={newData[i].gif} name={newData[i].name} data={newData} setData={setData} />
    );
  }

  return <div className="container">{cards}</div>;
}

function Card({gif, name, data, setData}) {
  function handleClick(){
    data.map((obj) => { if (obj.name === name) obj.clicked = true});
    console.log(data);
    setData(data => [...data]);
  }
  
  
  return (
    <div className="card" onClick={handleClick} >
      <img src={gif} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
