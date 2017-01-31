import { Component, OnInit } from '@angular/core';

import { MainContentServiceService } from '../main-content-service.service';
import { Imainpagedata } from '../Imainpagedata';
import { Iservicedatacontext } from '../Iservicedatacontext';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.css']
})
export class PortfolioComponentComponent implements OnInit {
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
      this.quota = this.contentData.quotes[2];
      this.label = this.contentData.labels[2];
      this.header = this.contentData.headers[2];
      this.text = this.contentData.textes[2];
    });
  }

}
