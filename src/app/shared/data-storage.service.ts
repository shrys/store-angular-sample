import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-9e371.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-9e371.firebaseio.com/recipes.json?auth=' + token)
        .pipe(
            map(
                (response) => {
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
        ) // https://github.com/angular/angular/issues/15548#issuecomment-387009186
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
