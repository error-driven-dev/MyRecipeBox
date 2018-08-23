import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';


import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editIndex: number;
  editIngredient: Ingredient;
  @ViewChild('f') ingredientForm: NgForm;
  subscription: Subscription;
  editMode = false;
  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.listService.shoplistEditor.subscribe(
      (index: number) => { 
        this.editIndex = index;
        this.editIngredient = this.listService.getIngredientById(index);
        this.ingredientForm.setValue(
          {
            name: this.editIngredient.name,
            amount: this.editIngredient.amount,
            measure: this.editIngredient.measure,
          }
        );
        this.editMode = true;
      });
  }

  onSubmit(f: NgForm){
   
    // passes value property of form
    const value = f.value;
   // use the value property to extract specific values
    const newIngredient = new Ingredient(value.name, value.amount, value.measure);
    if (this.editMode) {
      this.listService.updateIngredient(this.editIndex, newIngredient);
    } else {
    this.listService.addIngredient(newIngredient);
  }
    f.reset();
    this.editMode = false;
  }
  onClear(){
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.listService.deleteIngredient(this.editIndex);
  }
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

  
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const ingMeasure = this.measureInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount, ingMeasure);
  //   this.listService.addIngredient(newIngredient);
    
  //   this.nameInputRef.nativeElement.value = '';
  //   this.amountInputRef.nativeElement.value ='';
  //   this.measureInputRef.nativeElement.value ='';
  // }

}
