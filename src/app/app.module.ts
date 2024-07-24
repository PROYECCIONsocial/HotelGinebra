import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { ReservationsComponent } from './features/reservations/reservations.component';
import { LocationComponent } from './features/location/location.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContactComponent } from './features/contact/contact.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CarouselComponent } from './features/home/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoomsComponent,
    GalleryComponent,
    ReservationsComponent,
    LocationComponent,
    AboutUsComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
