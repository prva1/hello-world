import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelpComponent } from './help/help.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './service/weather.service';
import { ROUTING } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WeatherFoundComponent } from './weather-found/weather-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SortuserService } from './service/sortuser.service';
import { SortuserDateTableComponent } from './sortuser-date-table/sortuser-date-table.component';
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HelpComponent,
    WeatherComponent,
    NotFoundComponent,
    WeatherFoundComponent,
    PresentationComponent,
    UserComponent,
    SortuserDateTableComponent
  ],

  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ROUTING,
    Ng2CarouselamosModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
  ],

  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    WeatherService,
    UserService,
    SortuserService
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
