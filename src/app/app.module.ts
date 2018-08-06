import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ChairComponent } from './chair/chair.component';
import { ChairTypeComponent } from './chair-type/chair-type.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ShowChairComponent } from './show-chair/show-chair.component';
import { ShowChairTypeComponent } from './show-chair-type/show-chair-type.component'
import { PartComponent } from './part/part.component';
import { PartTypeComponent } from './part-type/part-type.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowpartsComponent } from './showparts/showparts.component';
import { ShowparttypeComponent } from './showparttype/showparttype.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const appRoutes: Routes = [
  
  { path: 'chairtype', component: ChairTypeComponent },
  { path: 'chair', component: ChairComponent },
  { path: 'chair/list',component: ShowChairComponent},
  { path: 'chairtype/list',component: ShowChairTypeComponent},
  {path: 'part', component:PartComponent},
  {path: 'part-type', component:PartTypeComponent},
  {path: 'part/list', component: ShowpartsComponent },
  {path: 'part-type/list', component: ShowparttypeComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ChairComponent,
    ChairTypeComponent,
    ShowChairComponent,
    ShowChairTypeComponent,
    PartComponent,
    PartTypeComponent,
    LoginComponent,
    ShowpartsComponent,
    ShowparttypeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), 
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
