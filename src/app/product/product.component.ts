import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl :"./product.component.html",
    styleUrls : ["./product.component.scss"]

})

export class ProductComponent implements OnInit{

pName :string = "Samsung M 31";
pId : number = 123;
pStatus : string = "in-Transition "


    ngOnInit(): void {

      console.log(`Product component is initization `)
          
               
    
    }



}