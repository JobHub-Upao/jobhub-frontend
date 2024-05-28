import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { GaleryComponent } from './galery/galery.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'inicio',component:EncabezadoComponent},
  {path:'screenshot',component:GaleryComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
