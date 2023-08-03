import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cardNo:boolean=false;
  checkOut = {
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    selectedStates: null,
    postalCode: '',
    cash:'',
    date:Date
    
  };

  states: any = ['PUNJAB', 'SINDH', 'KPK', 'BALOCHISTAN', 'GILGIT', 'Capital'];
  constructor() {}
  ngOnInit(): void {}
  onSubmit() {}

  showCard(){
    this.cardNo =true
  }
  offCard(){
    this.cardNo=false
  }
}
