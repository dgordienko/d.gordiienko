import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MainContentServiceService } from '../main-content-service.service';
import { Imainpagedata } from '../Imainpagedata';
import { Iservicedatacontext } from '../Iservicedatacontext';


@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit, AfterViewChecked {

  private contentData: Iservicedatacontext;
  private quota: string;
  private title: string;
  private label: string;
  private header: string;
  private text: string;
  constructor(private service: MainContentServiceService) { }

  ngOnInit() {
    this.service.getContent().subscribe(data => {
      this.contentData = (data as Imainpagedata).content;
      this.quota = this.contentData.quotes[0];
      this.label = this.contentData.labels[0];
      this.header = this.contentData.headers[0];
      this.text = this.contentData.textes[0];
    });
  }


  ngAfterViewChecked() {
    //  console.log('component try  ngAfterViewChecked');
  }

}
