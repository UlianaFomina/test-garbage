import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { GarbageService } from './services/garbage.service';
import { favoriteReducer } from './components/state/favorite.reducer';

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
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ favorites: favoriteReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [GarbageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
