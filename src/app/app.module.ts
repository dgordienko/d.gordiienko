import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import {MainContentServiceService} from './main-content-service.service';
import { MaterialModule } from '@angular/material';
import { MarkdownModule } from 'angular2-markdown';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponentComponent,
    PortfolioComponentComponent,
    CvComponentComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot()
  ],
  providers: [MainContentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
