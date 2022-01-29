import { Component, OnInit } from '@angular/core';
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
export class DatabodyComponent implements OnInit {
data: Persona[] = [];
  dataSource = this.data;
  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
  }

}
