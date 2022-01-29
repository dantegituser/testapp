import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Persona } from '../data';
import {datos} from '../data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Persona[] = datos;
  filters = []
  filtersList = []
  filtersChanged = new BehaviorSubject<string[]>([]);
  filtersListChanged = new BehaviorSubject<string[]>([]);
  constructor() {}
  getData(){
    return this.data;
  }
  receiveFilters(){
    return this.filtersChanged.asObservable();
  }
  filtersHaveChanged(filtros: string[]){
    this.filtersChanged.next(filtros);
  }
  receiveFiltersList(){
    return this.filtersListChanged.asObservable();
  }
  filtersListHaveChanged(filtrosList: string[]){
    this.filtersListChanged.next(filtrosList);
  }
}
