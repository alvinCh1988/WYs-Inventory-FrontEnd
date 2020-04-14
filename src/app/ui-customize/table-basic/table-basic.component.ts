import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss']
})
export class TableBasicComponent implements OnInit {

  displayedColumns: string[] = Object.keys(ELEMENT_DATA[0]);
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  location: string;
  quantyty: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { location: '汐止', quantyty: 2, date: '2020/04/14' },
  { location: '上坪', quantyty: 1, date: '2020/04/14' },
  { location: '媽那邊', quantyty: 1, date: '2020/04/14' },
];
