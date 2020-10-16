import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeDetaillsComponent } from './demande-detaills/demande-detaills.component';

import { UppdateDemandeComponent } from './uppdate-demande/uppdate-demande.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { HotelDetaileComponent } from './hotel-detaile/hotel-detaile.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { UpddateHotelComponent } from './upddate-hotel/upddate-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CreateDemandeComponent,
    DemandeDetaillsComponent,
   
    UppdateDemandeComponent,
    DemandeListComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    UpdateClientComponent,
    CreateHotelComponent,
    HotelDetaileComponent,
    HotelListComponent,
    UpddateHotelComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
