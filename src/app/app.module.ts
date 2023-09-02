import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
// import { ProductsComponent } from './products/products.component';
import {ProductsComponent } from './products/products.component';
import{TextComponent } from './text/text.component'
import { ImageComponent} from './image/image.component';
import  {SingleFile} from './compwith-single-file/compwith-single-file.component';
import { DataBindingComponent } from './data-binding/data-binding.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TextComponent,
    ImageComponent,
    SingleFile,
    DataBindingComponent,
 

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
