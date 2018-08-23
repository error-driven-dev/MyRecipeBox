import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../Shared/ingredient.model';
import { RecipeService } from '../Services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 id: number;
 editMode: boolean;
 recipeForm: FormGroup;
 newRecipe: Recipe;
 


 constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {this.id = params['id'];
      this.editMode = params['id'] != null;
      // init the form anytime the route params change
      this.initForm();
    });

  }
  onSubmit() {
    const form = this.recipeForm.value;
    this.newRecipe = new Recipe(form.name, form.description, form.imagePath, form.ingredients);
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, this.newRecipe);
    } else {
    this.recipeService.addRecipe(this.newRecipe);
  }
    this.recipeForm.reset();
    this.router.navigate(['recipes']);
   
  }
initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let ingredients = [];

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.image;
      ingredients = recipe.ingredients;
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'imagePath' : new FormControl(recipeImagePath),
      'ingredients': new FormArray(ingredients)
    });
  }

  onAddIngredient(ingredient: FormGroup){
    const ingForm = new FormGroup({
      'ingName' : new FormControl(null, Validators.required),
      'ingMeasure': new FormControl(null, Validators.required),
      'ingAmount': new FormControl(null)
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(ingForm);
  }

  onDeleteIngredient(index : number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
}
