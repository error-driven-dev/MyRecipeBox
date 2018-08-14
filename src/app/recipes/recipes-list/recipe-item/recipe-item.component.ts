import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../Services/recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css' ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  name: string;
  
 
  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  onSelected(){
  this.recipeService.selectedRecipe.emit(this.recipe);
  this.name = this.recipe.name.trim();
  this.router.navigate( [this.name], {relativeTo: this.activatedRoute});

  }

}
