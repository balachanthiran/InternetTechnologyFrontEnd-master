import { ITProjectPage } from './app.po';

describe('it-project App', () => {
  let page: ITProjectPage;

  beforeEach(() => {
    page = new ITProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
