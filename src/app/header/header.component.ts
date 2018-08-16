import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//  @Output() selectedFeature = new EventEmitter<{navTo:string}>(); 
 

  constructor() { }

  ngOnInit() {
  }
//old way of selecting feature
// onSelect(feature: string) {
  
//   this.selectedFeature.emit({navTo: feature})
// }
}
