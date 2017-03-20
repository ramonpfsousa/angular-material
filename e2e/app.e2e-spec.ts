import { NovofrontPage } from './app.po';

describe('novofront App', () => {
  let page: NovofrontPage;

  beforeEach(() => {
    page = new NovofrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
