import { PokerAppPage } from './app.po';

describe('poker-app App', function() {
  let page: PokerAppPage;

  beforeEach(() => {
    page = new PokerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
