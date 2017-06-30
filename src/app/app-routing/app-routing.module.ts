import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BulkCreateJiraComponent } from '../components/bulk-create-jira/bulk-create-jira.component';
import { AuthorizeComponent } from '../components/authorize/authorize.component';
import {CSVToJsonComponent } from '../components/csvto-json/csvto-json.component';
import {ComingSoonComponent} from '../components/coming-soon/coming-soon.component';
import { DragAndDropComponent } from '../components/drag-and-drop/drag-and-drop.component';
import { ConsumersComponent } from '../components/consumers/consumers.component';
import { ProductsComponent } from '../components/products/products.component';
import { SaleComponent } from '../components/sale/sale.component';
import {AuthGuard} from '../app-guard/auth.guard';
import {LoginService} from '../services/login.service';


const appRoutes: Routes = [
  { path: '', component: AuthorizeComponent },
  { path: 'bulkCreate', component: BulkCreateJiraComponent },
  { path: '\login', component: AuthorizeComponent },
  { path: '\get', component: CSVToJsonComponent, canActivate: [AuthGuard] },
  { path: '\comingsoon', component: DragAndDropComponent, canActivate: [AuthGuard] },
  { path: '\consumer', component: ConsumersComponent, canActivate: [AuthGuard]},
  { path: '\products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: '\sale', component: SaleComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
export const routingComponents = [BulkCreateJiraComponent, AuthorizeComponent, CSVToJsonComponent, ConsumersComponent, ProductsComponent,SaleComponent]