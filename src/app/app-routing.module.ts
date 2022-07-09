import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [{path:'', component:HomeComponent},
{path:'samples', component:SamplesComponent},
{path:'about',component:AboutComponent},
{path:'contact', component:ContactComponent,
children :[
  {path:'address', component:AddressComponent},
  {path:'phone', component:PhoneComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
