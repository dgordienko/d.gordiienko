import { Component, OnInit, AfterContentInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app works!';
  ngOnInit(){
    console.log('init application')
  }
   ngAfterContentInit(){
  }
}
