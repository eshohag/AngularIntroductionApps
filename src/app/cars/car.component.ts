import { Component, OnInit } from '@angular/core';
import { Car, CarServiceService } from './car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carList: Car[];
  errorMessage: string;
  title = 'Top 10 cars API Calling Success!';
  constructor(private cars: CarServiceService) {
    cars.getCars().subscribe(
      carList => (this.carList = carList),
      error => (this.errorMessage = <any>error)
    );
  }

  ngOnInit() {
  }
}
