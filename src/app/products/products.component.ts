import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})


export class ProductsComponent implements OnInit {
onProductSearch($event: Event) {
        





}

    isdisabled: boolean = true;
    noOfProducts: number = 0;
    pName: string = "Samsung M 31";
    pId: number = 123;
    pStatus: string = "in-Transition "
    productDetails: string = ' no product is added yet ';
     searchProductName !: string;




    constructor() {

    }

    ngOnInit(): void {
        setTimeout(() => {
            this.isdisabled = false
        }, 2000);

        // throw new Error("Method not implemented.");
    }
    getProductId() {
        return this.pId
    }
    onkeyup(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
      this.searchProductName = val;


        console.log(val)



    }

    getProductStatus() {

        // console.log("clicked");
        this.noOfProducts++;


        this.productDetails = `${this.noOfProducts} products is added in cart`

    }
}