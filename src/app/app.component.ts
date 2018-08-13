import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/Services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  ],
  
  
})
export class AppComponent {
  title = 'my-recipes';
  currentFeature = 'recipe';
  
  onNavTo({navTo}){
    this.currentFeature = navTo;
  }
}
