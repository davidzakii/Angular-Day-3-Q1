import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productCard : any;
  @Output() childData = new EventEmitter();

  today: any = new Date();
name : string= "david";
  handleClick(){
    this.childData.emit(this.productCard)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
