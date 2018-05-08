function init() {
  //put any page initialization/handlebars initialization here

  createRecipe()
  Handlebars.registerHelper('displayIngredient', () => {

  })
  Handlebars.registerPartial('recipeDetailsPartial', () => {

  })
  Handlebars.registerPartial('recipeFormPartial', () => {

  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  var recipe = {
    name: 'creamy tacos',
    description: 'very creamy',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "1 cup", name: 'rice'},
      {quantity: "1 cup", name: 'cheese'},
      {quantity: "1 cup", name: 'tomato'},
      {quantity: "5 cups", name: 'sour cream'}
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementById("recipe-form").innerHTML += result;
}

function createRecipe() {
  var recipe = {
    name: 'creamy tacos',
    description: 'very creamy',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "1 cup", name: 'rice'},
      {quantity: "1 cup", name: 'cheese'},
      {quantity: "1 cup", name: 'tomato'},
      {quantity: "5 cups", name: 'sour cream'}
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementById("recipe-form").innerHTML += result;
}

function updateRecipe() {
  var recipe = {
    name: 'creamy tacos',
    description: 'very creamy',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "1 cup", name: 'rice'},
      {quantity: "1 cup", name: 'cheese'},
      {quantity: "1 cup", name: 'tomato'},
      {quantity: "5 cups", name: 'sour cream'}
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementById("recipe-form").innerHTML += result;
}
