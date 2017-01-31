import { Component, OnInit } from '@angular/core';
import { MainContentServiceService } from '../main-content-service.service';
import { Imainpagedata } from '../Imainpagedata';
import { Iservicedatacontext } from '../Iservicedatacontext';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
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
      this.quota = this.contentData.quotes[1];
      this.label = this.contentData.labels[1];
      this.header = this.contentData.headers[1];
      this.text = this.contentData.textes[1];
    });
  }

}
