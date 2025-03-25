//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getdrinks)

function getdrinks(){
    
    let drinks = document.querySelector('input').value
        drinks = drinks.trim()

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[2])
      document.querySelector('h2').innerText = data.drinks[2].strDrink
      document.querySelector('img').src = data.drinks[2].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[2].strInstructions


    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
