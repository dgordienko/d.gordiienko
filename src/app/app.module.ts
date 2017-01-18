import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { CvComponentComponent } from './cv-component/cv-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponentComponent,
    PortfolioComponentComponent,
    CvComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
