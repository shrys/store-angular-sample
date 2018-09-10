import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
recipesChanged  = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('A Test Recipe', 'Simply a test', 'http://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg', [
            new Ingredient('Ingredient1', 10),
            new Ingredient('Ingredient2', 5)
        ]),
        // tslint:disable-next-line:max-line-length
        new Recipe('Another Test Recipe', 'Simply a test', 'http://picturetherecipe.com/wp-content/uploads/2018/06/Indian-Style-Chicken-Cutlets-PictureTheRecipe.jpg', [
            new Ingredient('Ingredient3', 2),
            new Ingredient('Ingredient4', 9)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // returns copy of array instead of reference
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

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
