import { Component, OnInit } from "@angular/core";

@Component({
  selector: "inventory-status-list",
  templateUrl: "./inventory-status-list.component.html",
  styleUrls: ["./inventory-status-list.component.scss"],
})
export class InventoryStatusListComponent implements OnInit {
  public dataSource = ELEMENT_DATA;
  public columnsName = ["項目", "單位", "庫存"];

  constructor() {}

  ngOnInit() {}
}

export interface PeriodicElement {
  item: string;
  unit: string;
  inventory: number;
}

const ELEMENT_DATA: any[] = [
  {
    series: "發光肌",
    products: [
      {
        item: "健康水噴霧",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "油水平衡露",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "早安精華",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "晚安精華",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
    ],
  },
  {
    series: "水潤光",
    products: [
      {
        item: "保濕露",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "保濕日精華",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "保濕夜精華",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
      {
        item: "保濕水凝乳",
        inventory: 2,
        storageLoc: [
          { loc: "下公館", quantity: 1 },
          { loc: "媽那邊", quantity: 1 },
        ],
      },
    ],
  },
];
