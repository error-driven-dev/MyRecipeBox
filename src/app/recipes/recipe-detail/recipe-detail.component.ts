import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../Services/recipe.service';
import {Recipe} from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/Services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private shopListService: 
    ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {this.index = +params['id'];
    }
    );
    this.recipe = this.recipeService.getRecipe(this.index);
  }
  onAddList(){
    this.shopListService.addShopList(this.recipe.ingredients);
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['recipes']);

  }
}
