import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-series-add',
  templateUrl: './series-add.component.html',
  styleUrls: ['./series-add.component.scss']
})
export class SeriesAddComponent implements OnInit {

  public seriesDataList = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.seriesDataList.push({});
  }

  deleteIpt(i: number) {
    this.seriesDataList.splice(i, 1);
  }

  onSubmit() {
    console.log(this.seriesDataList)
  }



}
