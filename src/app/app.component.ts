import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFiltering = false;
  filtersData = [];

  onHandleModal(event: boolean){
    this.isFiltering = false;
  }
  onOpenModal(event: boolean){
    this.isFiltering = true;
  }
  filterChanged(event:any){
    console.log(event);
  }
  pushFilters(){

  }
}
