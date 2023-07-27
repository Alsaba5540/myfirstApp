import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
// import { ProductsComponent } from './products/products.component';
import {ProductsComponent } from './products/products.component';
import{TextComponent } from './text/text.component'
import { ImageComponent} from './image/image.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TextComponent,
    ImageComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
