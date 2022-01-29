import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dtaservice: DataService
  ){}
  isFiltering = false;
  filtersData: string[] = [];
  filtersList: any[] = [];

  onHandleModal(event: boolean){
    this.isFiltering = false;
  }
  onOpenModal(event: boolean){
    this.isFiltering = true;
    this.filtersData = []
  }
  filterChanged(event:any){
    this.pushFilters(event)
  }
  pushFilters(objeto:any){
    for(let [value,key] of Object.entries(objeto)){
      if(Array.isArray(key)){
        key.forEach(item => {
          this.filtersData.push(item)
          this.addListFilters(value,key)
        }
        )
      }else if(key === true){
        this.filtersData.push(value)
        this.addListFilters('status',value)
      }else{
        continue;
      }
    }
    this.dtaservice.filtersHaveChanged(this.filtersData)
    this.dtaservice.filtersListHaveChanged(this.filtersList)
  }
  onClear(event:any){
    this.filtersData = []
    this.filtersList = []
    this.dtaservice.filtersHaveChanged(this.filtersData)
  }
  addListFilters(key:string,value:any){
    this.filtersList.push([key,value])
  }
  onSearch(termino:any){
    termino = this.titleCase(termino)
    this.filtersData.push(termino)
    this.dtaservice.filtersHaveChanged(this.filtersData)
  }
  titleCase(str:string) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {

       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }

   return splitStr.join(' ');
}

}
