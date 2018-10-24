import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  quantity = 10;
  price = 10;
  statecode;
  stateprice;
  result;

  findState() {
    if (this.statecode == 'UT') this.stateprice = 1.0685;
    if (this.statecode == 'NV') this.stateprice = 1.08;
    if (this.statecode == 'TX') this.stateprice = 1.0625;
    if (this.statecode == 'AL') this.stateprice = 1.04;
    if (this.statecode == 'CA') this.stateprice = 1.0825;
  }

  ov;

  constructor() { }

  ngOnInit() {
  }

  OV() {
    this.ov = this.quantity * this.price;
    this.findState();
    this.result = this.ov * this.stateprice;
  }


}
