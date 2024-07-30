import shuffle from "array-permutation/lib/shuffle"
import cat from "../gifs/cat.gif"
import dinosaur from "../gifs/dinosaur.gif"
import dog from "../gifs/dog.gif"
import elephant from "../gifs/elephant.gif"
import fox from "../gifs/fox.gif"
import giraffe from "../gifs/giraffe.gif"
import gorilla from "../gifs/gorilla.gif"
import horse from "../gifs/horse.gif"
import kangaroo from "../gifs/kangaroo.gif"
import ostrich from "../gifs/ostrich.gif"
import tiger from "../gifs/tiger.gif"
import turtle from "../gifs/turtle.gif"

import {shuffle} from "array-permutation"

const animalGifs = [cat, dinosaur, dog, elephant, fox, giraffe, gorilla, horse, kangaroo, ostrich, tiger, turtle];

export function CardContainer(){
    console.log(animalGifs);
    shuffle(animalGifs);
    console.log(animalGifs);

    return <Card></Card>
}

function Card(){
    return <div className="card">
        <img src={ostrich} alt="a" />
        <h2>Card name</h2>
    </div>
}