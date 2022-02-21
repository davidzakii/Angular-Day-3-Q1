import { Pipe, PipeTransform, ViewChild } from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';

@Pipe({
  name: 'showStock'
})
export class ShowStockPipe implements PipeTransform {

  @ViewChild(ProductListComponent) stock:any;
  transform(numLetters: number):any{
    if(numLetters == 0) {
       return"not available in stock";
    } else {
        return "in stock";
    }
}

  // transform(value: unknown, ...args: unknown[]): any {
  //  return ngAfterViewInit(){
  //   if(this.stock.price == 0){
  //     return value+"not available in stock"
  //   }else{
  //     return value+"in stock";
  //   }
  //  };
  // }

}

