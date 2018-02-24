import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppPageComponent } from './component/app-page/app-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { TransportPageComponent } from './component/transport-page/transport-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppPageComponent,
    AdminPageComponent,
    TransportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
