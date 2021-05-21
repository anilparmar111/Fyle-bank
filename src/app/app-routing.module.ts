import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from '@angular/router';
import {BankDataComponent} from "./bank-data/bank-data.component";
import { DisplayDataComponent } from "./display-data/display-data.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [

  {
    path : 'bank/:id',
    component : BankDataComponent
  },

  {
    path : '',
    component : DisplayDataComponent
  },

  {
    path : "**",
    component : PagenotfoundComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
