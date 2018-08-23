import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 id: number;
 editMode: boolean;
 recipeForm: FormGroup;
  
 constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {this.id = params['id'];
      this.editMode = params['id'] != null;
    });
    this.recipeForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'description' : new FormControl(null, Validators.required),
      'imagePath' : new FormControl(null)
    });

  }

  onSubmit() {
    console.log(this.recipeForm);
  }
initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'imagePath' : new FormControl(recipeImagePath)
    });
  }
}
