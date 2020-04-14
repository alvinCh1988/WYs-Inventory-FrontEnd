import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-status-list',
  templateUrl: './inventory-status-list.component.html',
  styleUrls: ['./inventory-status-list.component.scss']
})
export class InventoryStatusListComponent implements OnInit {

  public dataSource = ELEMENT_DATA;
  public columnsName = ['項目', '單位', '庫存'];

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  item: string;
  unit: string;
  inventory: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    item: '化妝水',
    unit: '瓶',
    inventory: 2,
  },
];
