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
const appRoutes: Routes = [
  
  { path: 'chairtype', component: ChairTypeComponent },
  { path: 'chair', component: ChairComponent },
  { path: 'chair/list',component: ShowChairComponent},
  { path: 'chairtype/list',component: ShowChairTypeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ChairComponent,
    ChairTypeComponent,
    ShowChairComponent,
    ShowChairTypeComponent
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
