import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { UppdateDemandeComponent } from './uppdate-demande/uppdate-demande.component';
import { DemandeDetaillsComponent } from './demande-detaills/demande-detaills.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { UpddateHotelComponent } from './upddate-hotel/upddate-hotel.component';
import { HotelDetaileComponent } from './hotel-detaile/hotel-detaile.component';




const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add', component: CreateClientComponent },
  { path: 'update/:id', component: UpdateClientComponent },
  { path: 'details/:id', component: ClientDetailsComponent },
  


  { path: '', redirectTo: 'demande', pathMatch: 'full' },
  { path: 'demandes', component:DemandeListComponent },
  { path: 'plus', component: CreateDemandeComponent },
  { path: 'uppdate/:id', component: UppdateDemandeComponent },
  { path: 'detaills/:id', component:DemandeDetaillsComponent },

  

  { path: '', redirectTo: 'hotel', pathMatch: 'full' },
  { path: 'hotels', component:HotelListComponent },
  { path: 'ajout', component: CreateHotelComponent },
  { path: 'upddate/:id', component: UpddateHotelComponent },
  { path: 'detaile/:id', component:HotelDetaileComponent},


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
