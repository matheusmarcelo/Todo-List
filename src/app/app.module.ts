import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './modules/home/home.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './modules/home/pages/home/home.component';



@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
