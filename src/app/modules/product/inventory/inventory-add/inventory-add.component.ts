import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.scss']
})
export class InventoryAddComponent implements OnInit {

  public seriesDataList = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.seriesDataList.push({});
  }

  deleteIpt(i: number) {
    this.seriesDataList.splice(i, 1);
  }

  onSubmit() {
    this.http.post('http://localhost:8080/addInventoryType', this.seriesDataList).subscribe(res => {
      console.log(res)
    });
  }

}
