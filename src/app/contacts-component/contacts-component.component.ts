import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {init} from 'dghp';

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit ,AfterViewChecked{

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    
  }

}
