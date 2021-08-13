import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() {
    this.name = '';
    this.speed = 0;
    this.model = '';
    this.colors = {
      car: 'None',
      salon: 'None',
      wheels: 'None'
    };
    this.options = [];
    this.isEdit = false;
  }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }
    this.options= ['ABS', 'Camera', 'Parktronic'];
  }

  carSelect(carName:string) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 250;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      }
      this.options = ['ABS', 'Camera', 'Parktronic'];
    }
    else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      }
      this.options= ['ABS', 'Camera', 'Parktronic'];
    }
    else if (carName == 'mers') {
      this.name = 'Mersedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      }
      this.options = ['ABS', 'Парктроник'];
    }
  }

  addOption(optionValue:string) {
    this.options.unshift(optionValue);
    return false;
  }
  deleteOption(optionValue:string) {
    for(let i = 0; i< this.options.length; i++) {
      if (this.options[i] == optionValue) {
        this.options.splice(i,1);
        break;
      }
    }
  }
  showEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
