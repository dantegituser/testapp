import { AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class DatabodyComponent implements OnInit, OnDestroy{
data: Persona[] = [];
  dataSource = this.data;
  innerFilters: string[] = [];
  @Input() public filters: string[] = [];
  dataSub = new Subscription;
  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
    this.dataSub = this.dataservice.receiveFilters()
    .subscribe(data => {
      this.innerFilters = data
    }
    )
  }
  ngOnDestroy(): void {
      this.dataSub.unsubscribe()
  }


}
