import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
     public pName : string= "iphone"   
    public pId : string = "I-343"

      
  constructor() { }

  ngOnInit(): void {

  }

}
