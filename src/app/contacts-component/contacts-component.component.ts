import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {MainContentServiceService} from '../main-content-service.service';

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit ,AfterViewChecked{

  constructor(private service:MainContentServiceService) { }

  ngOnInit() {
    console.log('component try get content');
    this.service.getContent();
  }

  ngAfterViewChecked(){
    
  }

}
