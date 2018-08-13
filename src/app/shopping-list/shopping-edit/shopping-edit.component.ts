import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter} from '@angular/core';

import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('measureInput') measureInputRef: ElementRef;

  

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    
  }
  

  
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingMeasure = this.measureInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingMeasure);
    this.listService.addIngredient(newIngredient);
    
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value ='';
    this.measureInputRef.nativeElement.value ='';
  }

}
