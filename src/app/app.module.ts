import { HeaderComponent } from './components/header/header.component';
import { GarbageService } from './services/garbage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GarbageItemComponent } from './components/gabage-item/garbage-item.component';

@NgModule({
  declarations: [AppComponent, GarbageItemComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [GarbageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
