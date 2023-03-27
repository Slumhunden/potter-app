"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };
  // Severus Snape
  const severus = {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: "",
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
  };
  // Draco Malfoy
  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };
  showCharacter(students [0])
  showCharacter(students [1])
  showCharacter(students [2])

  
  document.querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);
}
const students = [harry,ron,hermione]

function showCharacter(character) {
  console.log(character);
  const myHTML = /*HTML*/ `
<article>
                <h2>${character.name}</h2>
                <img src= "${character.image}">
                <p>${character.house}</p>
                <p>${character.dateOfBirth}</p>
                <p>${character.actor}</p>
            </article>
            `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked(character) {
    console.log(character);

    document.querySelector("#fullName").textContent = character.name;

    document.querySelector("#dialog_image").src = character.image;
    document.querySelector("#characterbox").showModal();
  }
}
