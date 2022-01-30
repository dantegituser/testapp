import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {datos} from '../../data'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  recommendationArray:any[] = []
  @Output() open = new EventEmitter<boolean>();
  @Output() clear = new EventEmitter<boolean>();
  @Output() onEnter = new EventEmitter<string>();
  filtersList:string[] = [];
  filtersub!: Subscription;
  termino = '';
  inputSearch: string = '';
  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.filtersub = this.dataservice.receiveFiltersList()
    .subscribe(data => {
      this.filtersList = data
    })
    this.recommendationArray = datos.map(persona => {
      let array = []
      for(let valor of Object.values(persona)){
       array.push(valor.toString())
      }
      return array
    })
    let tojoin = Array.from(this.recommendationArray.flat());
    this.recommendationArray = [...new Set(tojoin)]
  }
  openFilters(){
    this.open.emit(true)
    this.dataservice.filtersListHaveChanged([])
  }
  cleanFilters(){
  this.clear.emit(true)
  this.dataservice.filtersListHaveChanged([])
}
inputsearch(e:any){
  this.inputsearch = e.target.value;

}
onFiltrar(){
  this.onEnter.emit(this.termino)
}
keyPress(e:any){
  this.termino = e.target.value
  this.onEnter.emit(this.termino)
}
}
