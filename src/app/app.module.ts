import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter/counter.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { countreReducer } from './components/counter/state/counter.reducer';
import { CounterCustomInputComponent } from './components/counter/counter-custom-input/counter-custom-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterCustomInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter: countreReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
