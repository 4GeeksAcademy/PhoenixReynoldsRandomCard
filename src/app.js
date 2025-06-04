import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const suits = ["♦", "♥", "♠", "♣"]
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  
  let cardSuit = document.querySelector('.card-top')
  let cardButtSuit = document.querySelector('.card-butt')
  let cardBellyNumber = document.querySelector('.card-belly')
  const suitSelector = suits[Math.floor(Math.random() * suits.length)];
  const numberSelector = numbers[Math.floor(Math.random() * suits.length)];
  
  cardSuit.innerHTML = suitSelector
  cardButtSuit.innerHTML = suitSelector
  cardBellyNumber.innerHTML = numberSelector

  if (suitSelector==="♦" || suitSelector==="♥"){
    cardBellyNumber.style.color = 'red';
    cardSuit.style.color = 'red';
    cardButtSuit.style.color = 'red';
  }
  console.log("funni screem");
};
