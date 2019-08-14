import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Brik',
      'It is a delicate pastry dough called Malsouka, which is fried and stuffed with egg, parsley and tuna. It is served with lemon ',
      'https://www.tripinsiders.net/wp-content/uploads/2017/07/brik-tunisia.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient('Tuna', 10)
      ]),
    new Recipe('Tunisian Salad ',
      'This is a basic but effective salad, containing tomato, onion, cucumber, beans, potatoes, olives, tuna and egg. It is normally served with olive oil and lemon on top, and sometimes with Harissa as well.',
      'https://www.tripinsiders.net/wp-content/uploads/2017/07/tunisian_salad.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Egg', 1),
        new Ingredient('Tuna', 15),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
