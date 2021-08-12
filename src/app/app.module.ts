import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { ProductComponent } from './product/product.component';
import { LocationComponent } from './location/location.component';
import { BidtableComponent } from './bidtable/bidtable.component';


@NgModule({
  declarations: [
    AppComponent,
     BidderregistrationComponent,
     ProductComponent,ProductComponent, LocationComponent, BidtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
