import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  interpolation = 'hello';
  dataBind = 'Test Data Binding';
  story = {
    name: 'Story Name',
    purpose: 'Theoritically'
  };

  colorWhiteLogicalExpression = true;
  colorRedLogicalExpression = true;

  Submit = function (message: any) {
    alert(message);
  };

  constructor() { }

  ngOnInit() {
  }
}
