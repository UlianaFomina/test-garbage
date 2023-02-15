import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GarbageService } from './services/garbage.service';

import { AppComponent } from './app.component';

import { PostGarbageFormComponent } from './components/post-garbage-form-component/post-garbage-form.component';

import { MainComponent } from './components/main/main.component';
import { GarbageItemComponent } from './components/gabage-item/garbage-item.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    GarbageItemComponent,
    HeaderComponent,
    PostGarbageFormComponent,
    MainComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [GarbageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
