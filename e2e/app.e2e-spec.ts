import { ScrumYourselfPage } from './app.po';

describe('scrum-yourself App', function() {
  let page: ScrumYourselfPage;

  beforeEach(() => {
    page = new ScrumYourselfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
