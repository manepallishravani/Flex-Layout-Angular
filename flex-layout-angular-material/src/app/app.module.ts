import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app.routing';

@NgModule({
  exports: [AppComponent,HorizontalComponent,VerticalComponent],
  imports: [BrowserModule, MatCardModule, FormsModule, FlexLayoutModule, AppRoutingModule],
  declarations: [
    HorizontalComponent,
    VerticalComponent,
    AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
