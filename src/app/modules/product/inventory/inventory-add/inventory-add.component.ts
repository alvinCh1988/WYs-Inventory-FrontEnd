import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.scss']
})
export class InventoryAddComponent implements OnInit {

  public dataList = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.dataList.push({});
  }

  deleteIpt(i: number) {
    this.dataList.splice(i, 1);
  }

  onSubmit() {
    this.http.post('http://localhost:8080/addInventoryType', this.dataList).subscribe(res => {
      console.log(res)
    });
  }

}
