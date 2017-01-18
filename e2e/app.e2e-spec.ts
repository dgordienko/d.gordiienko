import { DGORDIENKOPESONALPAGEPage } from './app.po';

describe('dgordienkopesonalpage App', function() {
  let page: DGORDIENKOPESONALPAGEPage;

  beforeEach(() => {
    page = new DGORDIENKOPESONALPAGEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
