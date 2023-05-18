import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddStoreComponent } from './add-store/add-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "add-product", component: AddStoreComponent},
      { path: "update-product/:id", component: UpdateStoreComponent},
      { path: "store", component: StoreComponent},
      { path: "login", component: LoginComponent},
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "**", redirectTo: "login", pathMatch: "full" },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
