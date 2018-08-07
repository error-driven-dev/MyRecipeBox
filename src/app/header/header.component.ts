import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() selectedFeature = new EventEmitter<{navTo:string}>(); 
 

  constructor() { }

  ngOnInit() {
  }

onSelect(feature: string) {
  
  console.log(feature);
  this.selectedFeature.emit({navTo: feature})
}
}
