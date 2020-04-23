import { Component, OnInit } from "@angular/core";
import { Series } from './inventory-status-list.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "inventory-status-list",
  templateUrl: "./inventory-status-list.component.html",
  styleUrls: ["./inventory-status-list.component.scss"],
})
export class InventoryStatusListComponent implements OnInit {
  public dataSource;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.http.get('http://localhost:8080/tree').subscribe((x) => {
      this.dataSource = x;

    });



  }
}


const ELEMENT_DATA: Series[] =
  [
    {
      series: "發光肌",
      products: [
        {
          item: "健康水噴霧",
          inventory: 4,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 3, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "油水平衡露",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "早安精華",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "晚安精華",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
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
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "保濕日精華",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "保濕夜精華",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
        {
          item: "保濕水凝乳",
          inventory: 2,
          unassigned: 0,
          storageLoc: [
            { loc: "下公館", quantity: 1, update: '2020/04/15' },
            { loc: "葉媽", quantity: 1, update: '2020/04/15' },
          ],
        },
      ],
    },
  ];
