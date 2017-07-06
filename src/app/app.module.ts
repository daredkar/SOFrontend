import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdToolbarModule, MdMenuModule, MdIconModule} from '@angular/material';
import 'hammerjs';
import { Ng2FileInputModule } from 'ng2-file-input';

import { BulkCreateJiraComponent } from './components/bulk-create-jira/bulk-create-jira.component';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { CSVToJsonComponent } from './components/csvto-json/csvto-json.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { DragNDropDirective } from './directives/drag-ndrop.directive';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { JiraInDetailsComponent } from './components/jira-in-details/jira-in-details.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { ProductsComponent } from './components/products/products.component';
import { SaleComponent } from './components/sale/sale.component';
// Guards
import {AuthGuard} from './app-guard/auth.guard';

import {LoginService} from './services/login.service';
import { ProductsAdditionformComponent } from './components/products/products-additionform/products-additionform.component';
import { ConsumerAdditionFormComponent } from './components/consumers/consumer-addition-form/consumer-addition-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BulkCreateJiraComponent,
    routingComponents,
    AuthorizeComponent,
    CSVToJsonComponent,
    ComingSoonComponent,
    DragNDropDirective,
    DragAndDropComponent,
    JiraInDetailsComponent,
    ConsumersComponent,
    ProductsComponent,
    SaleComponent,
    ProductsAdditionformComponent,
    ConsumerAdditionFormComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule  ,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule, Ng2FileInputModule.forRoot(), MdCardModule,
    MdToolbarModule, MdMenuModule, MdIconModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

