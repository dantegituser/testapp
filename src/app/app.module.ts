import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { DatabodyComponent } from './components/databody/databody.component';
import { FiltermodalComponent } from './components/filtermodal/filtermodal.component';
import { MaterialModule } from './material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniquePipe } from './pipes/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    DatabodyComponent,
    FiltermodalComponent,
    FilterPipe,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
