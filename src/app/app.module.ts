import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartComponent } from './part/part.component';
import { PartTypeComponent } from './part-type/part-type.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowpartsComponent } from './showparts/showparts.component';
import { ShowparttypeComponent } from './showparttype/showparttype.component'

const appRoutes: Routes = [
   {path: 'part', component:PartComponent},
    {path: 'part-type', component:PartTypeComponent},
    {path: 'part/list', component: ShowpartsComponent },
   {path: 'part-type/list', component: ShowparttypeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PartComponent,
    PartTypeComponent,
    LoginComponent,
    ShowpartsComponent,
    ShowparttypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],

  exports: [
   RouterModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
