import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Persona } from '../../data';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-databody',
  templateUrl: './databody.component.html',
  styleUrls: ['./databody.component.css']
})
export class DatabodyComponent implements OnInit, OnDestroy, AfterViewInit{
data: Persona[] = [];
  dataSource = this.data;
  innerFilters: string[] = [];
  @Input() public filters: string[] = [];
  dataSub = new Subscription;
  total = 0;
  constructor(
    private dataservice: DataService,
  ) {  }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
    this.dataSub = this.dataservice.receiveFilters()
    .subscribe(data => {
      this.innerFilters = data
    })
    let total = 0;
    for(let item of this.data){
      total+= item.amount
    }
this.total = total
  }
  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
      this.dataSub.unsubscribe()
  }

}
