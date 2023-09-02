import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlefile',
  template:`
            <p class='text-center'> There is exapmle , where we create component in single file which is ts file 
              . where templateurl change with html content and styleurls with style we have for html content and 
              its is poosible when our code length will be 2 or 3 lines 
            </p>
            
            `,
  styles: [`
               p{
                padding:10px;
                margin:20px;
                background-color : orange;
                font-size: 25px;
                
                

               }  
  
  `]
})
export class SingleFile implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
