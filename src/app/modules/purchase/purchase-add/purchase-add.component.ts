import { format } from 'date-fns';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {

  public dataObject = {};

  date = new FormControl(new Date());

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }



  onSubmit() {
    console.log(this.dataObject);
    console.log('date===>', format(this.date.value, 'yyyy/mm/dd'));
    // this.http.post('http://localhost:8080/addInventoryType', this.seriesDataList).subscribe(res => {
    //   console.log(res)
    // });
  }

}
