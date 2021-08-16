import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { ProductComponent } from './product/product.component';
import { BidtableComponent } from './bidtable/bidtable.component';
import { ProductService } from './product.service';
import { BidderService } from './bidder.service';
import { AuctiontableComponent } from './auctiontable/auctiontable.component';
import { MarketPlaceComponent } from './market-place/market-place.component';



@NgModule({
  declarations: [
     AppComponent,
     BidderregistrationComponent,
     ProductComponent,BidtableComponent, AuctiontableComponent, MarketPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ProductService,BidderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
